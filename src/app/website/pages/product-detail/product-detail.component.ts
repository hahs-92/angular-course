import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Location } from '@angular/common';
//model
import { Product } from 'src/app/models/product.models';
//service
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId!:string;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private loaction: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.productId = params.get('id') as string;

          return this.productsService.getProduct(this.productId);
        })
      ).subscribe(data => this.product = data);
  }

  goToBack() {
    this.loaction.back();
  }

}
