import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
//models
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API_URL = 'https://young-sands-07814.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http
      .get<Product[]>(`${this.API_URL}/products`);
  }

  getProduct(id: string) {
    return this.http
      .get<Product>(`${this.API_URL}/products/${id}`);
  }
}
