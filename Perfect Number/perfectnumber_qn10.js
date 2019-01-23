// check whether a number (entered by the user) is a perfect number or not.

// A perfect number, a positive integer that is equal to the sum of its proper divisors. The smallest perfect number is 6, which is the sum of 1, 2, and 3.

"use strict";

function perfectNumber() {

    var onum = window.prompt("Enter the number: ");
    var num = parseInt(onum);

    let i, sum = 0;
    for(i = 0; i < num ; i++){
        if ( (num % i) === 0)
        {
            sum += i;
        }
    }
    
    
    
    if ( sum === num)
    {
        console.log(num + " is a perfect number");
        
    }

    else{
        console.log(num + " is not a perfect number");

    }
    
}

