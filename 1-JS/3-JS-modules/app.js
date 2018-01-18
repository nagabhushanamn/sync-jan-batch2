console.log('-app.js-');

// var global = global || {};
// global.mod1.doWork();


//----------------------------------------------------------

// let greet = require('./greet');
// greet.greet('en');
// greet.greet('es');
// greet.greet();

//----------------------------------------------------------


// let greetMod=require('sync-jan-batch2-greet');
// greetMod.greet('en');
// greetMod.greet('es');
// greetMod.greet();

//----------------------------------------------------------


// import { itemName, itemPrice } from './hotel';
// console.log(itemName);
// console.log(itemPrice);

// import { itemName as favFood, itemPrice } from './hotel';
// console.log(favFood);
// console.log(itemPrice);

// import * as item from './hotel';
// console.log(item.itemName)
// console.log(item.itemPrice)


// import { item } from './hotel'
// item = null; // error
// item.itemPrice = 300;


import item, { vegItem1 } from './hotel';


