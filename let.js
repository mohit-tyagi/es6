 'use strict';

(function () {
    var age = 35;
    if(true){
        var age = 55; // will use same variable
        console.log('Age inside block with var :: ', age);
    }
    console.log('Age outside block with var ::',age);
})();



(function () {
    let age = 35;
    if(true){
        let age = 55;   // will create different variable
        console.log('Age inside block with let :: ', age);
    }
    console.log('Age outside block with let :: ' , age);
})();