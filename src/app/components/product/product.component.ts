import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//models
import {Product} from '../../models/product.models'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

//de esta manera no tendremos que inicializar un objeto
  // @Input('product') product: Product = null!;
  @Input() product!: Product;

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showDetail = new EventEmitter<string>();

  constructor() { }


  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onShowDetail() {
    this.showDetail.emit(this.product.id);
  }

}
