
/*

    object <--------- object ( prototype )

*/

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.sayName = function () {
//     //     console.log('im ' + this.name);
//     // }
//     // this.sayAge = function () {
//     //     console.log('im ' + this.age + " old");
//     // }
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

// let p1 = new Person('Nag', 33);
// let p2 = new Person('Ria', 2);

//--------------------------------------------------

// let p={x:1,y:2}
// let c=Object.create(p);

//--------------------------------------------------

// let a = { x: 1, y: 2 };
// let b = { p: 3, q: 4 };

// Object.setPrototypeOf(b, a)