"use strict"

// let person = {
//     name: 'Nag',
//     age: 33
// };
// Object.defineProperty(person, 'name', { configurable: false, writable: false, enumerable: false });

// // delete person.name;
// // person.name = "Nag N"

// for (let p in person) {
//     console.log(person[p]);
// }

//---------------------------------------------------------------------


// let person = {
//     name: 'Nag',
//     age: 33
// };

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);

// person.newProp = "bla bla";
// delete person.name;
// person.name = "";

//---------------------------------------------------------------------


// let person = {
//     _name: 'Nag', // data property
//     _age: 33,
//     set name(name) { // accessor property  ( Es5 )
//         if (name) {
//             this._name = name;
//         }
//     },
//     get name() {
//         return this._name;
//     }
// };

// person.name = ""; // set
// console.log(person.name); // get