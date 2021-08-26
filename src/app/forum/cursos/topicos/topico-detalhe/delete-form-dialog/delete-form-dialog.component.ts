import { Component, Inject, OnInit } from '@angular/core';
import { TopicoService } from 'src/app/shared/services/topico.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-form-dialog',
  templateUrl: './delete-form-dialog.component.html',
  styleUrls: ['./delete-form-dialog.component.css']
})
export class DeleteFormDialogComponent implements OnInit {

  constructor(
    private rest: TopicoService,
    public dialogRef: MatDialogRef<DeleteFormDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }
  cancelar(): void {
    this.dialogRef.close();
  }
  apagaTopico(){
    // debugger;
    this.rest.deletarTopico(this.data.topico.id)
    .subscribe(
      data => {
        console.log(data);
        // debugger
        if (data.status===200 && data.statusText === "OK") {
          this.router.navigate([this.data.cursoNome])  
          this.dialogRef.close();
        }
      }
    );
  }

}
