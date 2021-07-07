import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  token:string

  constructor() {
    console.log("Jwt Token construct: " + this.token);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.token) {
      // CLONE SI UN TOKEN EXIST
      console.log("Jwt token intercept: " + this.token);
      const clone =
        request.clone({ setHeaders: { Authorization: `Bearer ${this.token}` } });
        console.log("this token : " + this.token);
      return next.handle(clone);
    }
    console.log("request: " + JSON.stringify(request));
    return next.handle(request);
  }

  setJwtToken(token: string): void {
    console.log("Token : " + token);
    this.token = token;
  }

  removeJwtToken(): void {
    this.token = null;
  }
}