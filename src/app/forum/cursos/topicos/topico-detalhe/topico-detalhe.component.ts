import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topico } from 'src/app/shared/models/topicos.model';
import { TopicoService } from 'src/app/shared/services/topico.service';
import { Location } from '@angular/common';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Resposta } from 'src/app/shared/models/resposta.model';

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
  constructor(
    private topicoService: TopicoService,
    private route: ActivatedRoute,
    private location: Location,

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
    let mock_user = new Usuario()
    mock_user.email = "cesar@cesar.cesar"

    let novaResposta = new Resposta()

    novaResposta.mensagem = this.textarea,
    novaResposta.autor = mock_user
    novaResposta.topico = this.topico,
    novaResposta.solucao = false
    
    let result = this.topicoService.novaResposta(novaResposta);
    // debugger;
    this.topico.respostas.push(novaResposta)
    this.textarea = ""
    
  }
}
