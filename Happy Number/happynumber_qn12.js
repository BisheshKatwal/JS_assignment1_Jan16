"use strict";

function happy_number(num) 
{
    var m, n ;
    var c = [] ;
 
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
}

function printResult() {

    var nm = window.prompt("Enter the number: ");
    let n = parseInt(nm);

    if(happy_number(n))
    {
        console.log(n + " is a happy number");        
    }

    else{
        console.log(n + " is not a happy number");
        
    }
    
}