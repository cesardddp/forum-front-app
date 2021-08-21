import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Curso } from '../models/curso.model';
import { CURSOS } from "../models/mock-cursos";
import { ResponsePageable } from '../models/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  apiUrl = 'http://localhost:8080/cursos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  getCursos():Observable<ResponsePageable>{
    // debugger;
    return this.httpClient.get<ResponsePageable>(this.apiUrl,this.httpOptions);
    //  const cursos = of(CURSOS)
    //  return cursos
  }
  
}
