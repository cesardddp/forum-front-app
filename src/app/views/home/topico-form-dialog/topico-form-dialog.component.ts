
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-topico-form-dialog',
  templateUrl: './topico-form-dialog.component.html',
  styleUrls: ['./topico-form-dialog.component.css']
})
export class TopicoFormDialogComponent implements OnInit {

  public topicoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TopicoFormDialogComponent>
  ) { }

  ngOnInit(): void {
    this.topicoForm = this.fb.group({
      titulo:     ["",[Validators.required]],
      mensagem:   ["",[Validators.required]],
      dataCriacao:["",[Validators.required]]
    })
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
