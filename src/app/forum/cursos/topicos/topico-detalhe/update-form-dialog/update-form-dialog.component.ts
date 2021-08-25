import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TopicoService } from 'src/app/shared/services/topico.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Topico } from 'src/app/shared/models/topicos.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-update-form-dialog',
  templateUrl: './update-form-dialog.component.html',
  styleUrls: ['./update-form-dialog.component.css']
})
export class UpdateFormDialogComponent implements OnInit {


  public topicoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: TopicoService,
    public dialogRef: MatDialogRef<UpdateFormDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.topicoForm = this.fb.group({
      titulo: ["", [Validators.required,Validators.minLength(5)]],
      mensagem: ["", [Validators.required,Validators.minLength(10)]],
    });
  }
  cancelar(): void {
    this.dialogRef.close();
    this.topicoForm.reset();
  }
  atualizaTopico(): void {
    let novoTopico = new Topico();
    // const curso = this.listaTcomponent.nomeCurso;
    this.topicoForm.valid

    novoTopico.mensagem = this.topicoForm.value.mensagem;
    novoTopico.titulo = this.topicoForm.value.titulo;
    // novoTopico.nomeCurso = this.data.cursoNome;

    this.rest.atualizarTopico(novoTopico,this.data.topico.id)
      .subscribe(
        data => {
          console.log(data);
          // debugger
          if (data.status===201 && data.statusText === "OK") {
            window.location.reload()
            // this.router.navigate([this.data.cursoNome,data.body.id])    
          }
        }
      );
    this.dialogRef.close();
    this.topicoForm.reset();
  }

}
