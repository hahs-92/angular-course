import { Component } from '@angular/core';
//services
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-store';
  imgUrl = "https://source.unsplash.com/random";
  showImg = true;
  // token = '';

  constructor(
    private authServices: AuthService,
    private usersServices: UsersService
  ){}

  onLoaded(imgUrl: string) {
    console.log('loaded padre')
    console.log(imgUrl)
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  // createUser() {
  //   this.usersServices.create({
  //     name: "Alex",
  //     email: "alex@mail.com",
  //     password: "1234"
  //   }).subscribe(console.log);
  // }

  // login() {
  //   this.authServices.login("alex@mail.com", "1234")
  //     .subscribe(rta => {
  //       this.token = rta.access_token;
  //     })
  // }

  // getProfile() {
  //   this.authServices.profile(this.token)
  //     .subscribe(console.log)
  // }

}
