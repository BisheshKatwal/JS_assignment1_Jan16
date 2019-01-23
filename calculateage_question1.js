"use strict";

var today = new Date('2019-01-21');
var birthDate = new Date('1999-04-21');
var age = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();

if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
       var age2 = age--;
}
else{
    age2 = age;
}


if (age === age2)
{
    let result = "Yo will be " + age + " years in " + today.getFullYear(); 
    console.log(result);
}

else{
    let result = "Yo will be " + age + " or" + age2 + " years in " + today.getFullYear();     
    console.log(result);
}
