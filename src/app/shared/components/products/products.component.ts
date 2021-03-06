import { Component, EventEmitter, Input, Output } from '@angular/core';
//models
import { Product } from 'src/app/models/product.models';
import { CreateProductDTO } from 'src/app/models/product.models';
import { UpdateProductDTO } from 'src/app/models/product.models';
//service
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @Output() loadMore = new EventEmitter();
  @Input() products: Product[] = [];
  //cada vez que camnie el id en el padre
  @Input()
  set productId(id:string | null) {
    if(id) {
      this.onShowDetail(id);
    }
  };

  myList: Product[] = [];
  total = 0;
  showProductDetail = false;
  productChosen!: Product;
  // limit = 10;
  // offset = 0;
  statusDetail: 'loading' | 'success' |'error' | 'init' = 'init';
  // today = new Date();
  // date = new Date(2021, 1, 21);


  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ) {
    this.myList = this.storeService.getMyList();
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
    // this.statusDetail = 'loading';

    if(!this.showProductDetail) {
      this.showProductDetail = true;
    }

    this.productService.getProduct(id)
      .subscribe(product => {
        // this.toggleProductDetail();
        this.productChosen = product;
        // this.statusDetail = 'success';
      })
  }

  createNewProduct() {
    const newProduct: CreateProductDTO = {
      title: 'new product',
      description: 'this is a test',
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      price: 1000,
      categoryId: 2
    }

    this.productService.create(newProduct)
      .subscribe(data => {
        this.products.unshift(data);
      })
  }

  updateProduct() {
    const update: UpdateProductDTO = {
      title: 'update title'
    }

    const id = this.productChosen.id;

    this.productService.update(id, update)
      .subscribe(data => {
        const productIndex = this.products
          .findIndex(item => item.id === this.productChosen.id);

        this.products[productIndex] = data;
        this.productChosen = data;
      });
  }

  deleteProduct() {
    const id = this.productChosen.id;

    this.productService.delete(id)
      .subscribe(() => {
        const productIndex = this.products
          .findIndex(item => item.id === this.productChosen.id);

        this.products.splice(productIndex, 1);
        this.showProductDetail = false;
      })
  }

  onLoadMore() {
    this.loadMore.emit();
  }



  //ejemplo de como evitar callback hell con peticiones multiples
  // readAndUpdate(id: string) {

  //   //cuando las promesas dependen una de otra
  //   this.productService.fetchReadAndUpdateWithDependecy(id, {title: 'change'})
  //     .subscribe(res => console.log);


  //   //cuando las promesas NO dependen una de otra
  //   this.productService.fetchReadAndUpdate(id, {title: 'change'})
  //   .subscribe(response => {
  //     const read = response[0];
  //     const update = response[1];
  //     console.log(read);
  //     console.log(update);
  //   })
  // }

}
