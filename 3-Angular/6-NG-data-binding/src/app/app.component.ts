import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  progress1: number = 0;
  progress2: number = 0;

  product: any = {
    name: 'Laptop',
    price: 100,
    description: 'New Mac pro'
  }

  constructor(private zone: NgZone) {}

  changePrice() {
    //    this.product.price = 1000 // mutating
    this.product = Object.assign({}, this.product, {price: 1000}) // immutable
  }

  processWithinAngularZone() {
    this.progress1 = 0;
    this.increaseProgress1(() => console.log('Done!'));
  }

  processOutsideAngularZone() {
    this.progress2 = 0;
    this.zone.runOutsideAngular(() => {
      this.increaseProgress2(() => {
        this.zone.run(() => {
          console.log('Outside Done!');
        });
      });
    });
  }


  increaseProgress1(doneCallback: () => void) {
    this.progress1 += 1;
    console.log(`Current progress: ${this.progress1}%`);
    if (this.progress1 < 100) {
      window.setTimeout(() => {
        this.increaseProgress1(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  }

  increaseProgress2(doneCallback: () => void) {
    this.progress2 += 1;
    console.log(`Current progress: ${this.progress2}%`);
    if (this.progress2 < 100) {
      if (this.progress2 % 10 === 0) {
        this.zone.run(() => {console.log('10%')})
      }
      window.setTimeout(() => {
        this.increaseProgress2(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  }

}
