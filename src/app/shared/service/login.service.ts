import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
    public posLogin(logn:any):Observable<User>{
      return this.httpClie
    }
  }
}
