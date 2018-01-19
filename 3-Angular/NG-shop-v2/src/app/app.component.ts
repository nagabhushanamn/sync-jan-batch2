import { Component } from '@angular/core';

@Component({
  selector: 'shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'NG-shop-v2';
  cart: Array<any> = [];
  products: Array<any> = [
    {
      name: 'Laptop',
      price: 198000,
      description: 'New Mac pro',
      makeDate: Date.now(),
      canBuy: true,
      discount: 10000,
      image: 'images/Laptop.png',
      reviews: [
        { stars: 5, author: 'nag@gmail.com', body: 'good one' },
        { stars: 3, author: 'indu@gmail.com', body: 'bad one' }
      ]
    },
    {
      name: 'Mobile',
      price: 18000,
      description: 'New  pro',
      makeDate: Date.now(),
      canBuy: true,
      image: 'images/Mobile.png',
      reviews: [
        { stars: 5, author: 'nag@gmail.com', body: 'good one' },
        { stars: 3, author: 'indu@gmail.com', body: 'bad one' }
      ]
    }
  ]

  addToCart(event) {
    this.cart.push(event.product);
  }

}
