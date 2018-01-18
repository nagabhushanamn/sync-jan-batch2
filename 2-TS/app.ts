

// let myName = "Nag";
// let myNum: number = 123;

// let v: any;
// v = "strig";
// v = 123;



//-----------------------------------------------------------


/*

    S.O.L.I.D  ( OO ) principles

    S — Single responsibility principle
    O — Open for extension, closed for midification principle
    L — Liskov substitution principle
    I — Interface segregation principle
    D — Dependency Inversion principle

*/

//-------------------------------------------------------------


/*

    e.g

      car  : move()
      wheel: rotate()
    

*/

//-----------------------------------------------------------

interface Wheel {
    rotate: () => void
}

//-----------------------------------------------------------

class MRFWheel implements Wheel {
    rotate() {
        console.log('MRF-wheel rotating....');
    }
}
class CEATWheel implements Wheel {
    rotate() {
        console.log('CEAT-wheel rotating....');
    }
}

//-----------------------------------------------------------

/*

    design & performance issues
    ----------------------------

    -> tight-coupling b/w dependent & dependency
        ==> cant extend with new features
    -> too many dependency instances are created & destructed
        ==> slow, memory use high,...
    -> Unit-Testing not possible
        ==> dev/bug fix slow

     
        why these issues ?

        ==> dependent itself creating its own dependency

        soln:

        ==> dont create , do lookup

        limitation on lookup:

        ==> location tight-coupling 

        best-soln : dont create/lookup , inject by 'some-one'  ( IOC )

        how to to implement IOC ?

        => dependency injection ( di )

            - constructor DI
            - setter DI



*/

class Car {
    wheel: Wheel
    constructor(wheel: Wheel) {
        this.wheel = wheel
    }
    move() {
        this.wheel.rotate();
        console.log('Car moving...');
    }
}

//-----------------------------------------------------------

let mrfWheel: Wheel = new MRFWheel();
let ceatWheel: Wheel = new CEATWheel();

let car: Car = new Car(ceatWheel);
car.move();
car.move();