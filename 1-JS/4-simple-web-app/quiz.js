


function teach() {
    let tnrName = "Nag"; // move to heap
    try {
        console.log(tnrName + ' teaching topic-1');
        //throw new Error('hates topic-1');
        setTimeout(function () {
            console.log(tnrName + ' teaching topic-2');
            //throw new Error('hates topic-2');
            console.log('teaching topic-2 ends');
        }, 5000);

        console.log('teaching topic-1 ends');
    } catch (e) {
        console.log('i caught ' + e.message);
    }
}

teach();