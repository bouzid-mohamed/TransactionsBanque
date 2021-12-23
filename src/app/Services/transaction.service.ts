import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  constructor(private _http: HttpClient) { }

  transactionUrl : string = "http://localhost:8762/compte-services/api/transaction/";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
    })
  }
  transactions : Transaction[] ;

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this._http.post<Transaction>(this.transactionUrl,transaction,this.httpOptions);}

    getAll(): Observable<Transaction> {
      return this._http.get<Transaction>(this.transactionUrl);}

}

