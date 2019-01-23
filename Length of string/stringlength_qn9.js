// Find the length of the string (entered by the user) without using the built-in function.

"use strict";

function strLength() {

    var str = window.prompt("Enter the string");
    let length = 0;

    while (str[length] !== undefined)
      length++;
    
    console.log("The length of " + str + " is: " + length);
}


