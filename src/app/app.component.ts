import { Component, OnInit } from '@angular/core';
//services
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';
import { TokenService } from './services/token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'my-store';
  imgUrl = "https://source.unsplash.com/random";
  showImg = true;
  imgRta = '';
  // token = '';

  constructor(
    private authServices: AuthService,
    private usersServices: UsersService,
    private fileService: FilesService,
    private tokenService: TokenService
  ){}


  ngOnInit(): void {
    //obtener el user si hay un token
    const token = this.tokenService.getToken();
    if(token) {
      this.authServices.getProfile()
        .subscribe();
    }
  }

  onLoaded(imgUrl: string) {
    console.log('loaded padre')
    console.log(imgUrl)
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.usersServices.create({
      name: "Alex",
      email: "alex92@mail.com",
      password: "1234",
      role: 'customer'
    }).subscribe(console.log);
  }

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


  // downloadPDF() {
  //   this.fileService
  //     .getFile('my.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
  //     .subscribe()
  // }

  // onUploadFile(e:Event) {
  //   const element = e.target as HTMLInputElement;
  //   const file = element.files?.item(0);

  //   if(file) {
  //     this.fileService.uploadFile(file)
  //       .subscribe(rta => {
  //         this.imgRta = rta.location;
  //       })
  //   }
  // }

}
