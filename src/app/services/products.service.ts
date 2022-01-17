import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
//models
import { Product } from '../models/product.models';
import { CreateProductDTO } from '../models/product.models';
import { UpdateProductDTO } from '../models/product.models';

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

  getProduct(id:string) {
    return this.http
      .get<Product>(`${this.API_URL}/products/${id}`);
  }

  create(dto:CreateProductDTO) {
    return this.http
      .post<Product>(`${this.API_URL}/products`, dto);
  }

  update(id:string, dto:UpdateProductDTO) {
    return this.http
      .put<Product>(`${this.API_URL}/products/${id}`, dto);
  }

  delete(id: string) {
    return this.http
      .delete<boolean>(`${this.API_URL}/products/${id}`);
  }
}
