console.log('-index.js-');

import 'zone.js'


//--------------------------------------------------------------

// Zone.current.fork({})
// .run(function () {
//     Zone.current.myZoneVar = true;
//     setTimeout(() => {
//         console.log('In timeout', Zone.current.myZoneVar);
//     }, 1000);
// });

//--------------------------------------------------------------

// function main() {
//     console.log('Start ');
//     setTimeout(function () {
//         throw new Error('Oops End- Error');
//     }, 1000);
//     console.log('In Progress ');
// }


// Zone.current.fork({
//     onHandleError: (parentZoneDelegate, currentZone, targetZone, error) =>{
//       console.log('error handler ->',error)
//     }
//   }).run(main);

//--------------------------------------------------------------

