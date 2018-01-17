


/*

    How to make/create function in .js-lang ?


    1. function declaration

        ==> Named function
        ==> function-obj created at context-creation phase
        ==> always get hoist with func-obj

    2. function-expression

        ==> anonymous-function
        ==> function-obj created at context-execution phase



*/

//----------------------------------------------------------------

// 1. function declaration

// console.log(add(12,13));
// function add(n1, n2) {
//     return n1 + n2;
// }
// console.log(add(12,13));

//----------------------------------------------------------------

// 2. function-expression

// console.log(add(12,13)); // Type Error
// var add = function (n1, n2) {
//     return n1 + n2;
// }
// console.log(add(12,13));

//----------------------------------------------------------------

// var userType;
// var action;
// function login() {
//     userType = "admin"; // 'guest'
// }
// if (userType === "admin") {
//     action = function () {
//         //...
//     }
// }
// else {
//     action = function () {
//         //..
//     }
// }

//----------------------------------------------------------------

// FP principles

// #1 A function can be stored in a variable or value

// function greet(){
//     console.log('Hello..');
// }

// var sayHello=greet;
// sayHello();

//----------------------------------------------------------------

// #2 A parameter of a function can be a function

// function greet(f) {
//     if (f) { f(); return; }
//     console.log('Hello..');
// }
// greet();
// greet(function(){console.log('Ola..')});

// e.g

// var nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort();
// nums.sort(function (a, b) { return a - b });

//----------------------------------------------------------------

// #3 The return value of a function can be a function


// function teach() {
//     console.log('teaching....');
//     let learn = function () {
//         console.log('learning...');
//     }
//     return learn;
// }

// var learnFunc=teach();
// learnFunc();
// learnFunc();

//----------------------------------------------------------------

// function reflect(a, b, c, d, e) {
//     console.dir(arguments);
//     return arguments[0];
// }

// console.log(reflect(1, 2, 3, 4, 5));


// Quiz

// function getFood() {
//     return "No Food";
// }
// var getFood=new Function('...');

// function getFood(pay) {
//     if (arguments.length === 0) return "No Food";
//     return "biryani";
// }
// // var getFood=new Function('...');

// console.log(getFood());


// function sum() {
//     let result = 0,
//         len = arguments.length,
//         idx = 0;
//     while (idx < len) {
//         result += arguments[idx]
//         idx++;
//     }
//     return result;
// }


//----------------------------------------------------------------


// // function with default params

// function func(a=1, b=2) {

//     // if(!a)a=1;
//     // if(!b)b=2;

//     // a = a || 1;
//     // b = b || 2;
//     console.log(a);
//     console.log(b);
// }

// func(undefined, 20);


//----------------------------------------------------------------

// function with rest-param

// function func(a, b, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(Array.isArray(rest))
//     console.log(rest)
// }

// func(1,2,3,4);

//----------------------------------------------------------------