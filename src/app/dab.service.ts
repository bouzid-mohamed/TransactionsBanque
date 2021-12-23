import { Injectable } from '@angular/core';
import { Dab } from './models/dab';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class DabService {

  constructor(private _http: HttpClient) { }

  dabsUrl : string = "http://localhost:8762/dab-services/api/dab";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
    })
  }
  dab : Dab[] ;
  getsingle(id: number): Observable<Dab> {
    return this._http.get<Dab>(this.dabsUrl +'/show/'+ id);  }

    getOne(id: number): Observable<Dab> {
     
      return this._http.get<Dab>(this.dabsUrl +'/show/'+ id) ;

    }
    updateSoldeDab (id: number, dab: Dab): Observable<Dab> {
      return this._http.put<Dab>(this.dabsUrl+'/update/'+ id, dab, this.httpOptions);}



}
