import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Topico } from 'src/app/shared/models/topicos.model';
import { TopicoService } from 'src/app/shared/services/topico.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-topico-form-dialog',
  templateUrl: './topico-form-dialog.component.html',
  styleUrls: ['./topico-form-dialog.component.css']
})

export class TopicoFormDialogComponent implements OnInit {
  
  
  public topicoForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private rest: TopicoService,
    public dialogRef: MatDialogRef<TopicoFormDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.topicoForm = this.fb.group({
      titulo: ["", [Validators.required,Validators.minLength(5)]],
      mensagem: ["", [Validators.required,Validators.minLength(10)]],
    });
  }

  novoTopico(): void {
    let novoTopico = new Topico();
    // const curso = this.listaTcomponent.nomeCurso;
    this.topicoForm.valid

    novoTopico.mensagem = this.topicoForm.value.mensagem;
    novoTopico.titulo = this.topicoForm.value.titulo;
    novoTopico.nomeCurso = this.data.cursoNome;

    this.rest.novoTopico(novoTopico)
      .subscribe(
        data => {
          console.log(data);
          debugger
          if (data.status===201 && data.statusText === "OK") {
            this.router.navigate([this.data.cursoNome,data.body.id])    
          }

        }
      );

    this.dialogRef.close();
    this.topicoForm.reset();
    // {
    //   "nomeCurso": "Python",
    //   "titulo": "must not be null",
    //   "mensagem": "length must be between 10 and 2147483647"
    // }
  }

  // required(input: FormControl){
  //   input.value ? null {obrigatorio:true}
  //   input.minLe
  //   return ()
  // }

  cancelar(): void {
    this.dialogRef.close();
    this.topicoForm.reset();
  }

}