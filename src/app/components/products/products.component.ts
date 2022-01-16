import { Component, OnInit } from '@angular/core';
//models
import { Product } from 'src/app/models/product.models';
//service
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
  ];
  myList: Product[] = [];
  total = 0;

  constructor(
    private storeService: StoreService
  ) {
    this.myList = this.storeService.getMyList();
   }

  ngOnInit(): void {
  }

  onAddToCart(product: Product) {
    this.storeService.addToProduct(product);
    this.total = this.storeService.getTotal();
  }

}
