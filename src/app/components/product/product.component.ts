import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
