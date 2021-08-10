import { Component, OnInit } from '@angular/core';
import { Topico } from 'src/app/shared/model/topicos.model';
import { TopicoService } from 'src/app/shared/service/topico.service';

@Component({
  selector: 'app-lista-topicos',
  templateUrl: './lista-topicos.component.html',
  styleUrls: ['./lista-topicos.component.css']
})
export class ListaTopicosComponent implements OnInit {

  topicos: Topico[];

  constructor(
    public topicoService: TopicoService 
  ) { }

  ngOnInit(): void {
    this.getTopicos();
  }

  getTopicos(){
      this.topicoService.getTopicos().subscribe(
        data => {
          this.topicos = data.content;
          console.log(this.topicos)
          console.log('teste')
        }
      )
      
      
    }

}
