import { Component, OnInit } from '@angular/core';
import { Topico } from 'src/app/shared/models/topicos.model';

import { TopicoService } from 'src/app/shared/services/topico.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common';
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
    private location: Location
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
}
