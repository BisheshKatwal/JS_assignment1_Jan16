"use strict";

const pi = 3.1416;

function takeNumber(num)
{
    let halfnum = num / 2;
    var n = halfnum ** 2;
    
    console.log("the area of circle is: " + (pi * (n ** 2)));
    
}

takeNumber(6);