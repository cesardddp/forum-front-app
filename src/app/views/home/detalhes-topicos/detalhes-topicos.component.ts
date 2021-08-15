import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topico } from 'src/app/shared/model/topicos.model';
import { TopicoService } from 'src/app/shared/service/topico.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalhes-topicos',
  templateUrl: './detalhes-topicos.component.html',
  styleUrls: ['./detalhes-topicos.component.css']
})
export class DetalhesTopicosComponent implements OnInit {

  topico: Topico;// | undefined;
  constructor(
    public topicoService: TopicoService,
    private route: ActivatedRoute,
    private location: Location
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
  goBack(): void {
    this.location.back();
  }

}
