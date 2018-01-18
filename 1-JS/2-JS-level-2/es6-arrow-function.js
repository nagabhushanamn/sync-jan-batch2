

// let getPrice = function () {
//     return 100 + 200;
// }


// let getPrice = () => {
//     return 100 + 200;
// }

// let getPrice = () => 100 + 200;
// let getPrice = (count) => count * (100 + 200);
// let getPrice = count => count * (100 + 200);
// let getPrice = (count, tax) => count * (100 + 200) + tax;
// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax
//     return total;
// };



// why/where we need arrow-function ?

/*
    ==> to make compact function-arg
    ==> to capture 'this'
*/

//------------------------------------------------------------
// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(function (a, b) { return a - b });
// or
// nums.sort((a, b) => a - b);

//------------------------------------------------------------

/*
    by default , regular function(s)

    -> bound to global-object
    or
    -> we can bind to any other-object dynamically

*/

//------------------------------------------------------------

// quiz

// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");

//         // let self=this;
//         // let askQues = function (q) {
//         //     console.log(`${this.name} answering ${q}`);
//         // }

//         // or

//         let askQues = (q) => {
//             console.log(`${this.name} answering ${q}`);
//         }

//         //console.log(this.name + " teaching .js ends");

//         return askQues;
//     }
// }

// let askQues = tnr.doTeach();
// askQues('Q1');
// let tmpTnr = { name: 'sync' }
// askQues.call(tmpTnr, 'Q2');

//------------------------------------------------------------

// 


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + " processed");
//     }
// }


// let invoice = {
//     num: 123,
//     process: () => {
//         console.log('INV-' + this.num + " processed");
//     }
// }


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + " processed partially");
//         return function () {
//             console.log('INV-' + this.num + " processed completly");
//         }
//     }
// }


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + " processed partially");
//         return () => {
//             console.log('INV-' + this.num + " processed completly");
//         }
//     }
// }

// let complete = invoice.process();
// complete();

//---------------------------------------------------------------------------


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        // let self = this;
        // let func = function () {
        //     //console.log(this);
        //     self.age++;
        //     console.log(self.name + " : " + self.age);
        // }
        // setInterval(func, 1000);


        let func = () => {
            this.age++;
            console.log(this.name + ":" + this.age);
        };
        setInterval(func, 1000);


    }
}

new Person('Ria', 1);