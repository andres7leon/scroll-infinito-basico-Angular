import { Component, ViewChild, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() onClose = new EventEmitter();

  array = [];
  stop = 0;
  desde = 0;
  deA = 10;

  modalScrollDistance = 2;
  modalScrollThrottle = 50;

  constructor() {
    for (let i = this.desde; i < this.deA; ++i) {
      this.array.push(i);
    }
  }  
  onModalScrollDown () {
    console.log('scrolled!!2');

    console.log("this.stop");
    if(this.stop === 4){

      console.log("entaaa");
    }else{
      this.desde = this.deA;
      this.deA = this.deA + 10;
      for (let i = this.desde; i < this.deA ; ++i) {
        this.array.push(i);
      }
      this.stop = this.stop +1 ;
    }
  }

}
