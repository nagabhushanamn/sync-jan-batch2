import {Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,   // oldInput === newInput
})
export class ProductComponent implements OnInit {

  @Input() product: any;

  offerPrice: number = 1000;

  constructor(private cd: ChangeDetectorRef) {}


  ngOnInit() {
    setInterval(() => {
      console.log('new offer...');
      this.offerPrice -= 100
      //this.cd.markForCheck();
      if (this.offerPrice === 900) {
        this.cd.detach()
      }
      if (this.offerPrice === 500) {
        this.cd.reattach();
        this.cd.markForCheck()
      }
    }, 1000);
  }

}
