import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponsePageable } from '../models/responsePageable.model';
import { Resposta } from '../models/resposta.model';
import { Topico } from '../models/topicos.model';

@Injectable({
  providedIn: 'root'
})
export class TopicoService {

  apiUrl = 'http://localhost:8080/topicos';
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  constructor(
    private httpClient: HttpClient,

  ) { }

  public getTopicos(curso:string): Observable<ResponsePageable> {
    // public getTopicos(curso:string): Observable<Topico[]> {
      // TODO
      return this.httpClient.get<ResponsePageable>(this.apiUrl+"?nomeCurso="+curso);// + '?flag=' + flag);
      // debugger;
      // const topicos = of(TOPICOS)
      //  return topicos
    }
  public getTopico(id:number): Observable<Topico> {
    // const topico = of(TOPICO)
    //  return topico
    return this.httpClient.get<Topico>(this.apiUrl+"/"+id);// + '?flag=' + flag);
  }
  public novaResposta(resposta:Resposta):Observable<Resposta> {
    // debugger;
    // return this.httpClient.post<any>(this.apiUrl,resposta,this.httpOptions);   
    return of(resposta)

  }
}
