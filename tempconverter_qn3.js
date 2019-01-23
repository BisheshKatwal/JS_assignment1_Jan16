"use strict";



function celciusToFarenheit (celcius)
{
    var farenheit = celcius * (9/5) + 32;
    console.log(celcius + "C is " + farenheit + "F" );
    return farenheit;
}

function farenheitToCelcius (f)
{
    var c = (f - 32) * (5/9);
    console.log( f + "F is " + c + "C");
}

let far = celciusToFarenheit(10);
farenheitToCelcius(far);


