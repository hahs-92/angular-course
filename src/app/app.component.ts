import { Component } from '@angular/core';
//models
import { Product } from './product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-store';
  name = 'Alex';
  age = 29;
  img = "https://source.unsplash.com/random";
  widthImg = 10;
  btnDisable = true;

  person = {
    name: 'Jess',
    age: 24
  }
  names: string[] = ["Jinx", "Vin", "Ekko", "Powder"];
  newName = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      // image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      // image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      // image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      // image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      // image: './assets/images/glasses.jpg'
    }
  ]

  box = {
    width: 100,
    height: 100,
    bg: 'red'
  }

  register = {
    username: '',
    email: '',
    password: ''
  }



  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log((element.scrollTop));
  }

  changeName(event:Event) {
    // const element = event.target as HTMLInputElement;
    // this.person.name = element.value;
    this.person.name = (event.target as HTMLInputElement).value;
  }

  addName() {
    //newName se ira acutalizando gracias a [()]
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1)
  }

  onSubmit() {
    console.log(this.register)
  }
 }
