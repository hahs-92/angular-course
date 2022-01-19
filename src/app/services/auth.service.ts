import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, tap } from 'rxjs';
//enviroment
import { environment } from 'src/environments/environment';
//models
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
//services
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //start:proxy o start
  private API_URL = `${environment.API_URL}/api/auth`;

  constructor(
    private http:HttpClient,
    private tokenService:TokenService
  ) { }

  login(email:string, password:string) {
    return this.http
      .post<Auth>(`${this.API_URL}/login`,{email, password})
      .pipe(
        tap(resp => this.tokenService.saveToken(resp.access_token))
      );
  }

  getProfile() {
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', `Bearer ${token}`)

    return this.http
      .get<User>(`${this.API_URL}/profile`);
  }


  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(rta => this.getProfile()),
    )
  }
}
