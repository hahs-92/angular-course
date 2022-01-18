import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { retry } from 'rxjs/operators';
//models
import { Product } from '../models/product.models';
import { CreateProductDTO } from '../models/product.models';
import { UpdateProductDTO } from '../models/product.models';
//enviroments
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //start:proxy o start
  private API_URL = `${environment.API_URL}/api`;

  constructor(private http: HttpClient) { }


  getProducts(limit?:number, offset?:number) {

    let params = new HttpParams();

    if(limit !== undefined && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http
      .get<Product[]>(`${this.API_URL}/products`,  { params })
      .pipe(retry(3));// tambien tiene retryWhen
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
