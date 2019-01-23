// Write a function named pluralize that: takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".

"use strict";

function pluralize( animal , num )
{
    if(num > 1)
    {
        console.log(animal + "s");
    }

    else{
        console.log(animal);
        
    }
}

pluralize("cat",2);