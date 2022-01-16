import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//models
import {Product} from '../../models/product.models'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

//de esta manera no tendremos que inicializar un objeto
  // @Input('product') product: Product = null!;
  @Input('product') product!: Product;

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

}
