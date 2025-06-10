//👉Function:-
//👉3 types of function:-
//1.function declaration:-function that be used before its declared
//2.function expression:-Essentialy a function value stored in variable
//3.Arrow function:-Great for a quick one line functions has no this keyword  

function logger(){
    console.log("My name is jonas");
}

//calling / running / invoking the function
logger()


function fruitProcessor(apples,oranges){
    // console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5,0));
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
const orangeJuice = fruitProcessor(2,4);
console.log(orangeJuice);


//function declaration
function calcAge(birthYear){
    return 2025- birthYear;
}
const age1 = calcAge(2004)
// console.log(calcAge(2004));

//👉function declaration using declare the variable menas function 
// without name is called anonymous function.

//function expression
const calcAge2 = function(birthYear){
    return 2025 - birthYear;
}
const age2 = calcAge2(2004);
console.log(age1,age2);

// console.log(calcAge2(2004));

//👉difference between function declaration and function expression 
//👉here in function declaration before the function call then declare 
// the function give output for the same 
//👉but in function expression before the function call and then declare
// function expression it is got the error can not  access before
// initilization 


//👉function calling other function.

function cutFruitPieaces(fruits){
    return fruits * 4;
}

function fruitProcessor(apples,oranges){
    //we called one function inside another function
    const applePeices = cutFruitPieaces(apples);
    const orangePeices = cutFruitPieaces(oranges);
    const juice = `Juice with ${applePeices} apples and ${orangePeices} oranges`;
    return juice;
}
console.log(fruitProcessor(2,3));

