import { Injectable } from '@angular/core';
//
import { BehaviorSubject } from 'rxjs';
//model
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myList: Product[] = [];

  private myCart = new BehaviorSubject<Product[]>([]);

  //observable
  myCart$ = this.myCart.asObservable();

  constructor() { }

  addToProduct(product: Product) {
    this.myList.push(product);
    this.myCart.next(this.myList);
  }

  getTotal() {
    return this.myList
      .reduce((sum, item) => sum + item.price, 0);
  }

  getMyList() {
    return this.myList;
  }
}
