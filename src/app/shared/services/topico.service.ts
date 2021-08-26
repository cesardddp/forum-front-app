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
      }),
      observe : 'response' as 'body'
    };
  constructor(
    private httpClient: HttpClient,
  ) { }

  public getTopicos(curso:string): Observable<ResponsePageable> {
      return this.httpClient.get<ResponsePageable>(this.apiUrl+"?nomeCurso="+curso);// + '?flag=' + flag);
 
    }
  public getTopico(id:number): Observable<Topico> {
    return this.httpClient.get<Topico>(this.apiUrl+"/"+id);// + '?flag=' + flag);
  }
  public novaResposta(resposta:Resposta,topicoId:number):Observable<any> {
    return this.httpClient.post<any>(this.apiUrl+"/"+topicoId+'/resposta',resposta,this.httpOptions);   
  }
  public novoTopico(topico:Topico):Observable<any>{
    return this.httpClient.post<Topico>(this.apiUrl,topico,this.httpOptions)
  }
  public atualizarTopico(topico:Topico,id:number):Observable<any>{
    return this.httpClient.put<Topico>(this.apiUrl+'/'+id,topico,this.httpOptions)
  }
  public deletarTopico(id:number):Observable<any>{
    return this.httpClient.delete<Topico>(this.apiUrl+'/'+id,this.httpOptions)
  }
}
