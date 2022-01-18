import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//enviroments
//enviroments
import { environment } from '../../environments/environment';
//models
import { User,CreateUserDTO } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //start:proxy o start
  private API_URL = `${environment.API_URL}/api`;

  constructor(
    private http:HttpClient
  ) { }

  create(dto: CreateUserDTO) {
    return this.http
      .post<User>(`${this.API_URL}/users`, dto);
  }


  getAll() {
    return this.http
      .get<User>(`${this.API_URL}/users`);
  }


}
