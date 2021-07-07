import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserModel } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { JwtInterceptor } from '../interceptors/jwt.interceptor';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userEvents = new BehaviorSubject<UserModel>(undefined);
  /*userEvents2 = new Subject<UserModel>() // ALT SANS PUBLICATION */
 // user: UserModel;
  constructor(private http: HttpClient, private jwtInterceptor:JwtInterceptor) {
    this.retrieveUser();
  }

  register(login: string, password: string, birthYear: number): Observable<UserModel> {
    const body = { login, password, birthYear };
    return this.http.post<UserModel>(`${environment.baseUrl}/api/users`, body);
  }

  authenticate(credentials: { login: string; password: string }): Observable<UserModel> {
    return this.http
      .post<UserModel>(`${environment.baseUrl}/api/users/authentication`, credentials)
      .pipe(tap(user => this.storeLoggedInUser(user)));
  }

  storeLoggedInUser(user: UserModel): void {
    if (user){
    console.log("USER = " + JSON.stringify(user));
    window.localStorage.setItem('ponyraceId', JSON.stringify(user));
    this.jwtInterceptor.setJwtToken(user.token)
    this.userEvents.next(user);
    }
  }

  retrieveUser(): boolean {
    const value = window.localStorage.getItem('ponyraceId');
    if (value !== "undefined") {
      console.log("User Connection : " + value.toString());
      const user = JSON.parse(value);
      this.jwtInterceptor.setJwtToken(user.token)
      this.userEvents.next(user);
      console.log("User Connecté : true");
      return true;
    } else {
 //     console.log("User Connecté : false");
      return false;
    }
  }

  logout(): void {
    this.jwtInterceptor.removeJwtToken();
    window.localStorage.removeItem('ponyraceId');
    this.userEvents.next(null);
  }

}