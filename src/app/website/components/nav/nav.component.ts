import { Component, OnInit } from '@angular/core';
//store services
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
//models
import { User } from 'src/app/models/user.model';
import { Category } from 'src/app/models/product.models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile!:User;
  categories: Category[] = [];

  constructor(
    private storeService:StoreService,
    private authService:AuthService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    //subscribirnos al store
    this.storeService.myCart$
      .subscribe(products => {
        this.counter = products.length;
      })

    //
    this.getAllCategories();
  }

  togglemenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    // this.authService.login('sebas@mail.com', '1212')
    // .subscribe(rta => {
    //   this.token = rta.access_token;
    //   console.log(this.token);
    //   this.getProfile();
    // });
    this.authService.loginAndGet('alex92@mail.com', '1234')
    .subscribe(user => {
      this.profile = user;
    });
  }


  getAllCategories() {
    this.categoriesService.getAll()
      .subscribe(data => this.categories = data);
  }

  // getProfile() {
  //   this.authService.getProfile()
  //   .subscribe(user => {
  //     this.profile = user;
  //   });
  // }

}
