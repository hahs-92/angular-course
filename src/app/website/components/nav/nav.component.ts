import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  profile: User | null = null;
  categories: Category[] = [];

  constructor(
    private storeService:StoreService,
    private authService:AuthService,
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //subscribirnos al store
    this.storeService.myCart$
      .subscribe(products => {
        this.counter = products.length;
      })
    //
    this.getAllCategories();

    this.authService.user$
      .subscribe(data => {
        this.profile = data;
      })
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


    // this.authService.loginAndGet('maria@mail.com', '12345') // role: customer
    this.authService.loginAndGet('admin@mail.com', 'admin123') // role: admin
    .subscribe(() => {
      // this.profile = user;
      this.router.navigate(['/profile']);
    });
  }


  getAllCategories() {
    this.categoriesService.getAll()
      .subscribe(data => this.categories = data);
  }


  logout() {
    this.authService.logout();
    this.profile = null;
    this.router.navigate(['/home']);
  }

  // getProfile() {
  //   this.authService.getProfile()
  //   .subscribe(user => {
  //     this.profile = user;
  //   });
  // }

}
