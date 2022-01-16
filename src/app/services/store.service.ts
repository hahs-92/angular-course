import { Injectable } from '@angular/core';
//model
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myList: Product[] = [];

  constructor() { }

  addToProduct(product: Product) {
    this.myList.push(product);
  }

  getTotal() {
    return this.myList
      .reduce((sum, item) => sum + item.price, 0);
  }

  getMyList() {
    return this.myList;
  }
}
