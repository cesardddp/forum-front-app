import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topico } from 'src/app/shared/models/topicos.model';
import { TopicoService } from 'src/app/shared/services/topico.service';
import { Location } from '@angular/common';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Resposta } from 'src/app/shared/models/resposta.model';
import { MatDialog } from '@angular/material/dialog';
import { UpdateFormDialogComponent } from './update-form-dialog/update-form-dialog.component';
import { DeleteFormDialogComponent } from './delete-form-dialog/delete-form-dialog.component';

@Component({
  selector: 'app-topico-detalhe',
  templateUrl: './topico-detalhe.component.html',
  styleUrls: ['./topico-detalhe.component.css']
})
export class TopicoDetalheComponent implements OnInit {

  topico!: Topico;// | undefined;
  cursoNome!:string;
  topicoId!:number;

  textarea="";
  user={
    'nome':localStorage.getItem('nome'),
    'email':localStorage.getItem('email'),
    'token':localStorage.getItem('token'),
  };
  constructor(
    private topicoService: TopicoService,
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog           


  ) { }

  ngOnInit(): void {
    this.topicoId = Number(this.route.snapshot.paramMap.get('topicoId'))
    this.cursoNome = String(this.route.snapshot.paramMap.get('cursoDoTopico'));
    this.getTopico();
  }
  getTopico(): void {
    // debugger;
    this.topicoService.getTopico(this.topicoId)
      .subscribe(
        topico => this.topico = topico
      );
    console.log(this.topico)
    console.log('teste')

  }
  goBack(): void {
    this.location.back();
  }
  postNovaResposta(){
    //mock user - apagar
    let user = new Usuario()
    user.email = String(localStorage.getItem("email"))
    // user.nome = String(localStorage.getItem("nome"))
    let novaResposta = new Resposta()

    novaResposta.mensagem = this.textarea,
    novaResposta.autor = user
    novaResposta.topico = this.topico,
    novaResposta.solucao = false
    
    let result = this.topicoService.novaResposta(novaResposta);
    // debugger;
    this.topico.respostas.push(novaResposta)
    this.textarea = ""
    
  }
  editarTopico():void{
    // if (!localStorage.nome){
    //    this.router.navigate(['login'])    
    //    return
    // }
    const dialogRef = this.dialog.open(UpdateFormDialogComponent,{
      minWidth: '400px',
      data:{
        topico:this.topico,
        cursoNome:this.cursoNome
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  apagarTopico():void{
    // if (!localStorage.nome){
    //    this.router.navigate(['login'])    
    //    return
    // }
    const dialogRef = this.dialog.open(DeleteFormDialogComponent,{
      minWidth: '400px',
      data:{
        topico:this.topico,
        cursoNome:this.cursoNome,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  logout(){
    localStorage.clear()
    window.location.reload();
  }
}
