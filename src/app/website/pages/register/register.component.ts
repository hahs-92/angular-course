import { Component } from '@angular/core';
//guards -interface
import { OnExit } from 'src/app/guards/exit.guard';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements  OnExit {

  constructor() { }


  onExit() {
    const rta = confirm('Estas seguro de salir?');
    return rta;
  }
}
