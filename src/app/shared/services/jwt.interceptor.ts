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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgZG8gRGV2Rm9ydW0iLCJzdWIiOiIyIiwiaWF0IjoxNjI5NTU0NjIwLCJleHAiOjE2Mjk2NDEwMjB9.lMsOvClO4WFbZMiMumenRZ3IbqX6Si6rVVAa9iNKM7E`
      }
  });
    return next.handle(request);
  }
}
