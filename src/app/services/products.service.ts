import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
//models
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http
      .get<Product[]>('https://fakestoreapi.com/products/');
  }
}