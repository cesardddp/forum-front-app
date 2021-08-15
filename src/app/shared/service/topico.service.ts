import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TOPICO } from '../model/mock-topico';
import { TOPICOS } from '../model/mock-topicos';
import { ResponsePageable } from '../model/responsePageable.model';
import { Topico } from '../model/topicos.model';

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
    private httpClient: HttpClient
  ) { }

  public getTopicos(curso:string): Observable<ResponsePageable> {
  // public getTopicos(curso:string): Observable<Topico[]> {
    // TODO
    // return this.httpClient.get<ResponsePageable>(this.apiUrl+"?nomeCurso="+curso);// + '?flag=' + flag);
    // debugger;
    const topicos = of(TOPICOS)
     return topicos
  }
  public getTopico(id:number): Observable<Topico> {
    const topico = of(TOPICO)
     return topico
    // return this.httpClient.get<Topico>(this.apiUrl+"/"+id);// + '?flag=' + flag);
  }

  /**
   * postTopico
   */
  public postTopico(topico:any):Observable<Topico> {
    return this.httpClient.post<any>(this.apiUrl,topico,this.httpOptions);    
  }

}
