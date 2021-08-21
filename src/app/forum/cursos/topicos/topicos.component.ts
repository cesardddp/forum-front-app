import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common';

import { Topico } from 'src/app/shared/models/topicos.model';
import { TopicoService } from 'src/app/shared/services/topico.service';

import { TopicoFormDialogComponent } from "./topico-form-dialog/topico-form-dialog.component";
// import { MatDialog } from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.css']
})
export class TopicosComponent implements OnInit {

  topicos!: Topico[];
  curso!:string;
  constructor(
    public topicoService: TopicoService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog           
  ) { }

  ngOnInit(): void {
    this.curso = this.route.snapshot.params.cursoDoTopico;
    this.getTopicos(this.curso)
  }

  getTopicos(curso:string){
    // let curso = this.route.snapshot.params.cursoDoTopico
      this.topicoService.getTopicos(curso).subscribe(
        data => {
          this.topicos = data.content;
          // console.log(this.topicos)
          // console.log('teste')
        }
      )
    }
  detalhesTopico(id:number){
    let curso = this.route.snapshot.params.cursoDoTopico

    this.router.navigate([curso,id])    

  }
  goBack(): void {
    this.location.back();
  }
  novoTopico():void{
    const dialogRef = this.dialog.open(TopicoFormDialogComponent,{
      minWidth: '400px',
      data:{
        cursoNome:this.curso
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
