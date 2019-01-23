"use strict";

function mixUp(str1, str2) {

    if ((str1.length >= 2) && (str1.length >= 2)) {

        let first = str1.slice(0,2) + str2.slice(2);
        let second = str2.slice(0,2) + str1.slice(2)
        console.log(first);
        console.log(second);      
    }
    
}

mixUp("dog","dinner");