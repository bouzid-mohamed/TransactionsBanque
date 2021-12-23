import { Injectable } from '@angular/core';

import { User} from '../models/user';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _http: HttpClient) { }

  userUrl : string = "http://localhost:8762/compte-services/api";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
    })
  }
  users : User[] ;

  addUser(user: User): Observable<User> {
    return this._http.post<User>(this.userUrl+"/users/",user,this.httpOptions);}

}
