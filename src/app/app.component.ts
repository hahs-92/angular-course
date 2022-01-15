import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-store';
  imgUrl = "https://source.unsplash.com/random";
  showImg = true;



  onLoaded(imgUrl: string) {
    console.log('loaded padre')
    console.log(imgUrl)
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

}
