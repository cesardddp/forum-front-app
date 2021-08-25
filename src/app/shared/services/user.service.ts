import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8080/auth';
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe : 'response' as 'body'
    };

    constructor(
      private httpClient: HttpClient,
  
    ) { }

  public login(loginForm:any):Observable<any>{
    let login_json = {email:loginForm.value.email,senha:loginForm.value.senha}
    return this.httpClient.post<any>(this.apiUrl,login_json,this.httpOptions)
  }
  
}
