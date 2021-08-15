import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { USUARIO } from 'src/app/views/usuario/mock-usuarios';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  //tentativa fail
  // getUsuario(id:number): Usuario {
  //   return USUARIO.filter(
  //     usuario => { return if usuario.id === id}
  //   ) ;
  // }

  getUsuarios(): Observable<Usuario[]> {
    const usuario = of(USUARIO);
    return usuario;
  }

  // getUsuario(id: number): Observable<Usuario> {
    // const hero = HEROES.find(h => h.id === id)!;
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(hero);
  // }
}
