import { Component, OnInit } from '@angular/core';
import { Topico } from 'src/app/shared/model/topicos.model';
import { TopicoService } from 'src/app/shared/service/topico.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-topicos',
  templateUrl: './lista-topicos.component.html',
  styleUrls: ['./lista-topicos.component.css']
})
export class ListaTopicosComponent implements OnInit {

  topicos!: Topico[];

  constructor(
    public topicoService: TopicoService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location


  ) { }

  ngOnInit(): void {
    this.getTopicos();
  }

  getTopicos(){
    const curso = String(this.route.snapshot.paramMap.get('curso'))
      this.topicoService.getTopicos(curso).subscribe(
        data => {
          this.topicos = data.content;
          // console.log(this.topicos)
          // console.log('teste')
        }
      )
    }
  detalhesTopico(id:number){
    this.router.navigate(['/topico/'+id])    
  }
  goBack(): void {
    this.location.back();
  }
}
