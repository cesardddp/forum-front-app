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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-topico-detalhe',
  templateUrl: './topico-detalhe.component.html',
  styleUrls: ['./topico-detalhe.component.css']
})
export class TopicoDetalheComponent implements OnInit {

  topico!: Topico;// | undefined;
  cursoNome!:string;
  topicoId!:number;
  isAutor!:Boolean;
  isAdmin!:Boolean;

  // textarea="";
  public topicoForm!: FormGroup;

  user={
    'nome':localStorage.getItem('nome'),
    'email':localStorage.getItem('email'),
    'token':localStorage.getItem('token'),
    'role':localStorage.getItem('role'),
    
  };
  constructor(
    private fb: FormBuilder,
    private topicoService: TopicoService,
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog           


  ) { }

  ngOnInit(): void {
    this.topicoId = Number(this.route.snapshot.paramMap.get('topicoId'))
    this.cursoNome = String(this.route.snapshot.paramMap.get('cursoDoTopico'));
    this.getTopico();
    this.topicoForm = this.fb.group({
      resposta: ["", [Validators.minLength(10)]],
    });
  }
  getTopico(): void {
    this.topicoService.getTopico(this.topicoId)
      .subscribe(
        topico => {
          this.topico = topico;
          console.log(this.topico);
          this.isAutor = this.user.nome === this.topico.nomeAutor;
          this.isAdmin = this.user.role === "ROLE_ADMIN";
          }
        );
  }
  goBack(): void {
    this.location.back();
  }
  postNovaResposta(){
    let novaResposta = new Resposta()

    novaResposta.mensagem = this.topicoForm.value.resposta;

    let result = this.topicoService.novaResposta(novaResposta,this.topico.id)
    .subscribe(
      data => {
        this.topico.respostas.push(data.body);
        this.topicoForm.reset();

      }
    )
    
  }
  editarTopico():void{
   
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
