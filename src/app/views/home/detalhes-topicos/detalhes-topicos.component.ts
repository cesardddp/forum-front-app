import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topico } from 'src/app/shared/model/topicos.model';
import { TopicoService } from 'src/app/shared/service/topico.service';

@Component({
  selector: 'app-detalhes-topicos',
  templateUrl: './detalhes-topicos.component.html',
  styleUrls: ['./detalhes-topicos.component.css']
})
export class DetalhesTopicosComponent implements OnInit {

  public topico: Topico;// | undefined;
  constructor(
    public topicoService: TopicoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getTopico();

  }


  getTopico(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.topicoService.getTopico(id)
      .subscribe(
        topico => this.topico = topico
      );
    console.log(this.topico)
    // console.log('teste')

  }

}
