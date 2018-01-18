

/*
    closure

    A closure is a function having access to the parent scope,
    even after the parent function has closed.
*/

// function doTeach(sub) {
//     console.log('teaching ' + sub);
//     let notes = sub + "-notes"
//     let fun = 'bla bla';
//     let doLearn = function () {
//         console.log('learning with ' + notes);
//     }
//     //doLearn();
//     console.log('teaching end..');
//     return doLearn;
// }
// let learnFunc = doTeach('.js'); // teach-context created args & locals
// learnFunc();

//--------------------------------------------------------

/*

    why/where we need closures ?

    ==> to abstract public-behav of any modules
    ==> when func executing async , to access parent-scoped data

*/
//--------------------------------------------------------

// ==> to abstract public-behav of any modules

/*

    e.g  counter-module

        count: 0
        doCount()
        getCount()

*/

// self-executable function / IIFE module pattern

const counter = (function() {
    var count = 0; // private
    // public
    function doCount() {
        count++;
    }
    function getCount() {
        return count; Î
    }
    return {
        inc: doCount,
        get: getCount
    }
})();

// let counter = init();
// let counter2 = init();