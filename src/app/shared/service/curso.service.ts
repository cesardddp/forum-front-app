import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Curso } from '../model/curso.model';
import { CURSOS } from "../model/mock-cursos";
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  apiUrl = 'http://localhost:8080/curso';
  constructor(
    private httpClient: HttpClient
  ) { }

  getCurso():Observable<Curso[]>{
    // return this.httpClient.get<Curso[]>(this.apiUrl);
     const cursos = of(CURSOS)
     return cursos
  }
}
