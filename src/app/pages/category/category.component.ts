import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
//services
import { ProductsService } from 'src/app/services/products.service';
//models
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  // categoryId: string | null = null;
  categoryId!: string ;
  limit = 10;
  offset = 0;
  products:Product[] = [];


  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {

    // evitar callback hell
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.categoryId = params.get('id') as string
          return this.productsService.getByCategory(this.categoryId,this.limit, this.offset);
        })
      ).subscribe(data => this.products = data);

    //obtener el id de la route
    // this.route.paramMap.subscribe(params => {
    //   this.categoryId = params.get('id') as string;
    //   this.productsService.getByCategory(this.categoryId,this.limit,this.offset)
    //     .subscribe(data => {
    //       this.products = data;
    //     })
    // });
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
