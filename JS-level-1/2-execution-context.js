

/*

 Execution-Context / scope
 ----------------------------

  memory/stack-frame with given args & locals to execute instructions in seq

  2 phases

  phase-1: context-creation / push

    => all variables declared with 'var' keyword any-where within context, 
       will get hoisted with default value ( undefined)
    
  phase-2: context-execution / pop

    => instructions will get execute in seq.

   ------------------------------------------------------------------------------

    ==> by default , every .js-runtime has 1 global-context always
    ==> any contex must run by an 'object'

    e.g

      -> global-context always executed by 'global-object'


       global-object:
       
       browser-envi  ==> window
       Node.js       ==> process
       ... 
   
   
    imp-note:

       every function-invoction also creates new-context 
       which is child of in-which context that function has declared/created

*/

// ------------------------------------------------------------------------------

// var v=12;
// console.log(v);

// ------------------------------------------------------------------------------


// var v=12;
// function f1(){
//     console.log(v);
//     var v=13;
// }
// f1(); // f1-context  <=== global-context


// ------------------------------------------------------------------------------

// Quiz

// var v = 12;

// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     f2();  // f2-context <=== f1-contxt
//     var v = 13;
// }
// f1(); // f1-context  <== global-context

// ------------------------------------------------------------------------------

// var v=12;
// var v=13;

// ------------------------------------------------------------------------------

// var v=100;
// if(true){
//     var v=200;
// }
// console.log(v);

// ------------------------------------------------------------------------------

/*

    problems with 'var' keyword :

    ==> variables aways get hoist
    ==> same variable we can declare multiple times within context
    ==> No block-scope

    soln:

    ==> using 'let' & 'const' keywords  ( Es6 )

*/


// ------------------------------------------------------------------------------

// console.log(v)
// let v=12;

// ------------------------------------------------------------------------------

// let v=13;
// var v=12;

// ------------------------------------------------------------------------------

// var v=100;
// if(true){
//     let v=200;
// }
// console.log(v);

// ------------------------------------------------------------------------------

// const trainer={
//     name:'Nag'
// };

// // trainer=null;
// trainer.name="Nag N";

