

var Rx = require('rxjs/Rx');

//------------------------------------------------------
const stream = Rx.Observable.create((observer) => {
    let n = 0;
    let interval = setInterval(() => {
        n++;
        console.log('emiiting new data/event into stream..');
        observer.next(n)
        if (n === 10) {
            observer.complete()
            clearInterval(interval);
        }
    }, 100);
});

//------------------------------------------------------


stream
    .filter(n => n % 2 === 0)
    .subscribe((e) => {
        console.log(e)
    }, (err) => {
        console.log(err);
    }, () => {
        console.log('stream closed..');
    });

//------------------------------------------------------