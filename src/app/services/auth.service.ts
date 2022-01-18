import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs';
//enviroment
import { environment } from 'src/environments/environment';
//models
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //start:proxy o start
  private API_URL = `${environment.API_URL}/api/auth`;

  constructor(private http:HttpClient) { }

  login(email:string, password:string) {
    return this.http
      .post<Auth>(`${this.API_URL}/login`,{email, password});
  }

  getProfile(token:string) {
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', `Bearer ${token}`)

    return this.http
      .get<User>(`${this.API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Content-type': 'application/json'
        }
      });
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(rta => this.getProfile(rta.access_token)),
    )
  }
}
