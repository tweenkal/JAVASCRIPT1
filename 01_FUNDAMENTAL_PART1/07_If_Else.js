//👉if else:-
const age = 14;

if(age >= 18){
    console.log("Sarah can start driving licenece🚘");   
}
else{
    const yeasLeft = 18 - age;
    console.log(`Sarah is to young.wait another ${yeasLeft} years :)`);
}


const birthYear = 1998;

let century;
if(birthYear <= 2000)
{
    century = 20;
}
else
{
    century = 21;
}
console.log(century);


// Write a program that checks if a number is positive, negative, or zero.

let number = 12;

if(number > 0){
    console.log("This is positive");
}
else if(number < 0){
    console.log("This is negative");
}
else{
    console.log("This is zero");
}