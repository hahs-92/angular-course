import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, OnDestroy {

  // @Input() imgUrl: string = '';

  imgUrl: string = '';
  @Input('imgUrl')
  set changeImg(newImg: string) {
    this.imgUrl = newImg;
    //code
    console.log('change img: ', this.imgUrl);
  }

  @Input() imgAlt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = 'assets/images/default.png';

  counter = 0;
  counterfn: number | undefined;

  constructor() { }

  ngOnInit(): void {
    // this.counterfn = window.setInterval(() => {
    //   this.counter++;
    //   console.log('run counter');
    // }, 1000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //todos los cambios de los inputs
    console.log('onChanges: ',changes);

  }

  ngOnDestroy(): void {
    // window.clearInterval(this.counterfn)
  }


  imgError() {
    this.imgUrl = this.imgDefault
  }

  imgLoaded() {
    console.log('loaded')
    this.loaded.emit(this.imgUrl)
  }

}
