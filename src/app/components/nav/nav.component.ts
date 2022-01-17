import { Component, OnInit } from '@angular/core';
//store services
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;

  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    //subscribirnos al store
    this.storeService.myCart$
      .subscribe(products => {
        this.counter = products.length;
      })
  }

  togglemenu() {
    this.activeMenu = !this.activeMenu;
  }

}
