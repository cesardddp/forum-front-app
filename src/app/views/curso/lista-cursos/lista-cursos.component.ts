import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/shared/model/curso.model'
import { CursoService } from 'src/app/shared/service/curso.service';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  cursos!: Curso[];

  constructor(
    public cursoService:CursoService,
    private router:Router,

  ) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(){
    this.cursoService.getCurso().subscribe(
      cursos => this.cursos = cursos
    );
  }
  listaTopicos(nome_curso:string){
    this.router.navigate(['/topicos/'+nome_curso])    
    //filter para topicos by curso
  }
  

}
