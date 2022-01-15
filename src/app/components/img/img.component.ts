import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() imgUrl: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = 'assets/images/default.png';

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.imgUrl = this.imgDefault
  }

  imgLoaded() {
    console.log('loaded')
    this.loaded.emit(this.imgUrl)
  }

}
