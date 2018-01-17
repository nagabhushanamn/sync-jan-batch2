
/*
    this ==> current context's owner
*/

// why we need 'this' keyword ?

// let pName = "Global";
// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         let pName = "Local";
//         console.log('im ' + pName); // context's hierarchy data
//         console.log('im ' + person.pName); // obj's data
//         console.log('im ' + this.pName); // current context's owner data
//     }
// };
// // person.sayName();
// let p = person;
// person = { pName: 'Ria' };
// p.sayName();

//--------------------------------------------------------------------


/*

    function-binding
    -------------------

    1. static 
    2. dynamic

*/

//--------------------------------------------------------------------------------

// 1. static function-binding

// let p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name) } }
// let p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name) } }

// function sayNameForAll() {
//     console.dir(this);
//     console.log('im ' + this.name);
// }
// let p1 = { name: 'Nag', sayName: sayNameForAll }
// let p2 = { name: 'Ria', sayName: sayNameForAll }

// sayNameForAll(); // im ??  // function-invocation  ( this ==> global-obj )
// p1.sayName(); // im Nag    // method-invocation    ( this ==> inoker-obj)
// p2.sayName(); // im Ria

//--------------------------------------------------------------------------------


// 2. dynamic function-binding

// let greetLib = {
//     name: 'greet-lib',
//     sayName: function (message, from) {
//         console.log(message + ' im ' + this.name + " : " + from);
//     }
// };

// // greetLib.sayName();


// let p = { name: 'Nag' }
// let e = { name: 'Sync' }

// // // // way-1
// // greetLib.sayName.call(p, "Hello", "chennai");
// // greetLib.sayName.call(e, "Hey", "Bengaluru");

// // // way-2
// // greetLib.sayName.apply(p, ["Hello", "chennai"]);
// // greetLib.sayName.apply(e, ["Hey", "Bengaluru"]);

// // way-3
// let sayNameFuncOnPerson = greetLib.sayName.bind(p, "Hello", "CHN")
// sayNameFuncOnPerson();
// p.name = "Ria";
// sayNameFuncOnPerson();
// let sayNameFuncOnEmp = greetLib.sayName.bind(e);
// sayNameFuncOnEmp('Hey', "CHN");
// sayNameFuncOnEmp('Dude', "BLR");


//--------------------------------------------------------------------------------

// ES5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayName = function () {
//         console.log('im ' + this.name);
//     }
//     this.sayAge = function () {
//         console.log('im ' + this.age + " old");
//     }
// }

// let p1 = new Person('Nag', 33);  // constructor invocation  ( this ==> new-obj )
// let p2 = new Person('Ria', 2);
// //..


//--------------------------------------------------------------------------------

// in .js , we can invoke function in 4 ways

/*

    1. function invocation   ( this ==> global-obj )
    2. method-invocation     ( this ==> invoker-obj)
    3. call/apply/bind invocation ( this ==> arg-obj )
    4. constructor invocation ( this ==> new-obj )


*/