import { Component, OnInit } from '@angular/core';
//services
import { ProductsService } from 'src/app/services/products.service';
//models
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  statusDetail: 'loading' | 'success' |'error' | 'init' = 'init';
  limit = 10;
  offset = 0;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.statusDetail= 'loading';
    this.productsService.getProducts(this.limit, this.offset)
      .subscribe({
        next: (data) => {
          this.statusDetail = 'success';
          this.products = data;
          this.offset += this.limit;
        },
        error:(e) => {
          console.log(e);
          this.statusDetail = 'error';
        },
        complete: () => this.statusDetail = 'init'
      })
  }

  onLoadMore() {
    this.productsService.getProducts(this.limit, this.offset)
    .subscribe(data => {
      // this.products = this.products.concat(data);
      this.products.push(...data);
      this.offset += this.limit;
    })
  }
}
