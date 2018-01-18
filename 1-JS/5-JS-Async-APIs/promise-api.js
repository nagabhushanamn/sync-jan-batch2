
let swiggy = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                //reject('sorry, rest.. cant serve ur order..');
                setTimeout(() => {
                    console.log('resolving/rejecting swiggy promise.. ');
                    resolve('Biryani');
                    //reject('Cant serv KF beer, mallaya is not here');
                }, 2000)
            }, 3000);
        });
        return promise;
    }
}



let bar = {
    getDrink: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('resolving/rejecting bar promise.. ');
                resolve('KF-beer');
            }, 3000);
        });
        return promise;
    }
}





let person = {
    doWork: function () {
        console.log('person working.....');
        console.log('feels hungry.....req food on swiggy module');
        let promise = swiggy.getFood();
        let promise2 = bar.getDrink();
        console.log('got promise... defer actions to future');
        Promise.race([promise, promise2]).then((result) => {
            console.log('yummy ' + result);
        }, (error) => {
            console.log('oops ' + error);
        });
        console.log('cont with other work.. ends..');
    }
}

person.doWork();