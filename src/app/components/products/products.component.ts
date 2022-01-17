import { Component, OnInit } from '@angular/core';
//models
import { Product } from 'src/app/models/product.models';
//service
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  myList: Product[] = [];
  total = 0;
  showProductDetail = false;
  productChosen!: Product;
  // today = new Date();
  // date = new Date(2021, 1, 21);


  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ) {
    this.myList = this.storeService.getMyList();
   }

  ngOnInit(): void {
    this.productService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      })
  }

  onAddToCart(product: Product) {
    this.storeService.addToProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  //recibir id producto to show
  onShowDetail(id: string) {
    this.productService.getProduct(id)
      .subscribe(product => {
        this.toggleProductDetail();
        this.productChosen = product;
      })
  }

}
