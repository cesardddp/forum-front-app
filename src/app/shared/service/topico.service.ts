import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  public getTopicos(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl);// + '?flag=' + flag);
  }

  /**
   * postTopico
   */
  public postTopico(topico:any):Observable<Topico> {
    return this.httpClient.post<any>(this.apiUrl,topico,this.httpOptions);    
  }

}
