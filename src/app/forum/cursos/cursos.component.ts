import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/shared/services/curso.service';
import { UserComponent } from 'src/app/user/user.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos!:Array<any>;
  user={
    'nome':localStorage.getItem('nome'),
    'email':localStorage.getItem('email'),
    'token':localStorage.getItem('token'),
  };
  // logado = this.user.nome !== null
  
  constructor(
    private cursoService:CursoService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.getCursos();
    // debugger
  }

  getCursos(){
    this.cursoService.getCursos().subscribe(
      data => {
        this.cursos = data.content;
      }
    );
      // cursos => this.cursos = cursos.content
    // );
  }
  listaTopicos(nome_curso:string){
    // debugger;
    this.router.navigate([nome_curso])  
 // this.router.navigate(['/heroes', { id: heroId }]);  
    //filter para topicos by curso
  }
  logout(){
    localStorage.clear()
    window.location.reload();
  }

}
