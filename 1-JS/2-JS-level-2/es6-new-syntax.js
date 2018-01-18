

//--------------------------------------------------
// string interpolation

let tnr = {
    name: 'Nag'
}
let sub = ".js"

// let dynamicString = "the trainer " + tnr.name + " , killing with " + sub;
// or
let dynamicString = `the trainer ${tnr.name}, teaching ${sub}`;

let htmlTemplate = `

    <div>
        <h1>${tnr.name}</h1>
        <h1>${12 + 12}</h1>
    </div>

`
//--------------------------------------------------

// obj-literal enhancements

let name = "Nag";
let age = 33;
let dynamicField = "home"; // office | vacation

// ES5
let person1 = {
    name: name,
    age: age,
    sayName: function () {
        //..
    },
    'home-address': '...'
}

// ES6
let person2 = {
    name,
    age,
    sayName() {
        //..
    },
    [dynamicField + "-address"]: '....',
}

// console.log(person2[dynamicField + "-address"]);

//--------------------------------------------------

// destructuring

//a. array destructuring

// let nums = [12, 13, 14, 15, 16, 17, [18, 19]];

// let a=nums[0];
// let b=nums[1];
// let c=nums[2];

// or

// let [a, b, c, d = 5, , f, [g, h]] = nums;

// let a, b;
// [a, b] = nums;


//a. object destructuring

// let person = {
//     name: 'Nag',
//     age: 33
// }

// let name = person.name;
// let myAge = person.age;

// or

// let { name: name, age: myAge } = person;
// let { name, age: myAge } = person;

// let name;
// let myAge;

// ({ name, age: myAge } = person);

//--------------------------------------------------

// spread operator


// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums = [10, 20, 30];

// func(nums[0], nums[1], nums[2]);

// or

// func(...nums);


// let a1 = [1, 2, 3];
// let a2 = [7, 8, 9];
// let a3 = [...a1, 5, 6, 7, ...a2];


//--------------------------------------------------

// symbol - data-type

// let javaSymbol = Symbol.for('java');
// let jsSymbol = Symbol.for('js');

// let e1 = { name: 'A', [javaSymbol]: "java,Spring" }
// let e2 = { name: 'B', [jsSymbol]: "js,Angular" }


// let menu = ['idly', 'vada', 'poori'];

// for (let item of menu) {
//     console.log(item);
// }
// let newMenu = [...menu, "biryani"]
// let [item1, item2] = menu;


let idMaker = {
    [Symbol.iterator]: function () {
        let id = 0;
        return {
            next: function () {
                id++;
                return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true }
            }
        };
    }
};

for (let id of idMaker) {
    console.log(id);
}

let ids = [...idMaker];

let [id1, id2] = idMaker;

//--------------------------------------------------