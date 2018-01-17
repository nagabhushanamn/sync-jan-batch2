

/*

     data-types:

     1. simple / prmitives  ==> values

     a. string
     b. number
     c. boolean
     d. undefined

     2. complex / references ==> objects

*/


// 1. simple / prmitives  ==> values

//------------------------------------------------------------
// a. string

var name = "Nag";
var selection = 'abc';

//------------------------------------------------------------

// b. number

var count = 12;
var cost = 12.12;

//------------------------------------------------------------

// c. boolean

var found = true;


/*

// imp-note

falsy-values ==> false,0,"",null,undefined,NAN

ref: https://dorey.github.io/JavaScript-Equality-Table/

*/


//------------------------------------------------------------

// c. undefined

var v;

//------------------------------------------------------------


// 2. complex / references ==> objects

/*

    how to create object in .js-lang ?

    var ref=new Constructor();

    imp-note:

    by default,

       ==> all .js-objects are extensible & configurable

*/


// var config = new Object();
// config.url = "http://"
// config.method = "GET"
// config.success = function () {
//     console.log('exe success()');
// }
// delete config.method;



//------------------------------------------------------------


// literal-style objects

// a. Object

var config = new Object();
config.url = "http://"
config.method = "GET"
config.success = function () {
    console.log('exe success()');
}

// or

var config = {
    url: 'http://',
    method: 'GET',
    success: function () { }
}


//------------------------------------------------------------

// b. Array

var arr = new Array();
arr[0] = "biryani";
arr.push("raitha");

// or

var arr = ["biryani", ".."];

//------------------------------------------------------------

// c. RegExp

var re = new RegExp("\\d{4}-\\d{4}-\\d{4}");

// or

var re = /\d{4}-\d{4}-\d{4}/;

//------------------------------------------------------------


// d. Function

var add = new Function('n1', 'n2', 'var r=n1+n2;return r;');

// or

function add(n1, n2) {
    var r = n1 + n2;
    return r;
}

//------------------------------------------------------------

// how to access obj properties ?

/*

     2 ways

     --> . notation  ==> if property dont have any '-' or 'space' or 'digit'
     else
     --> [] notation

*/

var p = {
    name: 'Nag',
    'homeaddress': 'chennai'
};

// p.name="Nag N";
// console.log(p.name)

// p['name'] = "Nag N";
// console.log(p['name']);

p['home-address'] = "bengalore";
console.log(p['home-address']);

let o={
    1:"One",
    100:"HUndred"
}