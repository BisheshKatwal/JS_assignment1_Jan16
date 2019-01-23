// check whether a number entered by the user is magic number or not

"use strict";

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join(''); // turn a number into a string, then turn it into an array to reverse. 
    return Math.sign(n) * parseInt(reversed); // Math.sign will return -1 as for negative number, 1 as for position number, 0 as for zero.
  }

function magicNumber()
{
    let num = window.prompt("Enter the number: ");

    let value = num.split('').map(Number);

    let i, sum = 0;

    for ( i = 0; i< value.length ; i++ )
    {
        sum += value[i];
    }

    if (sum * reverseInt(sum) === parseInt(num)) {
        console.log("The number is a magic number!!!");      
       
    }

    else{
        console.log("The number is not a magic number!!!");
        
    }

}