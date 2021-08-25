import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const headers = request.headers
    //   .set('Content-Type', 'application/json');
    // const authReq = request.clone({ headers });
    request = request.clone({
      setHeaders: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
      }
  });
    return next.handle(request);
  }
}
