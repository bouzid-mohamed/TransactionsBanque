import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  productsUrl : string = "http://127.0.0.1:8000/products";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
    })
  }




  product : Product[] ;
  
  getProduct(): Observable<Product[]>{
    return this._http.get<Product[]>(this.productsUrl);
  }
  addProduct(product: Product): Observable<Product> {
    return this._http.post<Product>(this.productsUrl, product, this.httpOptions);}

}
