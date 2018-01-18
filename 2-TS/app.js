// let myName = "Nag";
// let myNum: number = 123;
//-----------------------------------------------------------
var MRFWheel = /** @class */ (function () {
    function MRFWheel() {
    }
    MRFWheel.prototype.rotate = function () {
        console.log('MRF-wheel rotating....');
    };
    return MRFWheel;
}());
var CEATWheel = /** @class */ (function () {
    function CEATWheel() {
    }
    CEATWheel.prototype.rotate = function () {
        console.log('CEAT-wheel rotating....');
    };
    return CEATWheel;
}());
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
var Car = /** @class */ (function () {
    function Car(wheel) {
        this.wheel = wheel;
    }
    Car.prototype.move = function () {
        this.wheel.rotate();
        console.log('Car moving...');
    };
    return Car;
}());
//-----------------------------------------------------------
var mrfWheel = new MRFWheel();
var ceatWheel = new CEATWheel();
var car = new Car(ceatWheel);
car.move();
car.move();
