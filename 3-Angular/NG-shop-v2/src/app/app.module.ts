import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceDiscountPipe,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
