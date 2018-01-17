

var myArr = [];

//------------------------------------
function getF(i) {
    return function () {
        console.log(i);
    }
}
for (var i = 0; i < 2; i++) {
    myArr.push(getF(i));
}
//------------------------------------

myArr[0]();
myArr[1]();