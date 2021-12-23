import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  authUrl : string = "http://localhost:8762/compte-services/api/auth";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
    })
  }

  auth(email: String,password:String): Observable<String> {
    return this._http.post<String>(this.authUrl,{"email":email,"password":password},this.httpOptions);}
    getToken(){
      return localStorage.getItem('token') ;
    }
}
