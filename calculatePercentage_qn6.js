"use strict";

function checkDivision(percent){

    if((percent >= 80) && (percent <= 100))
    {
        console.log("Distinction");
    }
    
    else if((percent >= 60) && (percent < 80))
    {
        console.log("First Division");
    }

    else if((percent >= 40) && (percent < 60))
    {
        console.log("Second Division");
    }

    else if((percent >= 32) && (percent < 40))
    {
        console.log("Third Division");
    }
    else{
        console.log("fail");
        
    }

}

checkDivision(85);