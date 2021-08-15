import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario.model';
import { Location } from '@angular/common';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

@Component({
  selector: 'app-usuario-detalhes',
  templateUrl: './usuario-detalhes.component.html',
  styleUrls: ['./usuario-detalhes.component.css']
})
export class UsuarioDetalhesComponent implements OnInit {

  usuario!: Usuario;

  constructor(
    private route:ActivatedRoute,
    private location: Location,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getUsuario();

  }
  getUsuario(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.usuarioService.getUsuario(id)
    //   .subscribe(usuario => this.usuario = usuario);
    // this.topicoService.getTopico(id).subscribe(topico => this.topico = topico);
  }

}
