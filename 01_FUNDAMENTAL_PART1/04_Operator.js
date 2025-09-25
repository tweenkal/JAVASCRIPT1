//👉operator:-
//👉operators is basically allows transform values or combine 
// multiple values. 

//👉Math operator 
const now = 2037;   
const ageJonus = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonus,ageSarah);

console.log(ageJonus * 2,ageJonus / 10 , 2 ** 3);
// 2 ** 3 means 2 to power of 3 = 2 * 2 * 2


//👉Arithmatic operator
const firstName = "jonus ";
const lastName = "savaliya";

console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);

//👉Assignment operator
let x = 10 + 5;   //15
x += 10;  // 15 + 10 means x = x + 10
x *= 4; //x = x * 4 = 100
x++; //x = x + 1 = 101
x--; //x = x - 1 = 100
x--; //x = x - 1 = 99
console.log(x);  //25   
  
//👉Comparision operator
console.log(ageJonus > ageSarah);  //> ,< , >= , <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

let com1 = 12
let com2= 14

let com3 = 12
let com4 = "12"

console.log("com1 == com2 is:",com1 == com2);
console.log("com1 != com2 is:",com1 != com2);
console.log("com3 === com4 is:",com3 === com4);
console.log("com1 !== com2 is:",com1 !== com2);
console.log("com1 > com2 is:",com1 > com2);


// logical oerator
let y = 5;
let z = 6;

console.log(y<z && y==5);
console.log(y>z || y==5);
console.log(!false);
console.log(!true);





//👉operator precedence
console.log(25 - 10 - 5);

let a , b;
a = b = 25 - 10 - 5;
console.log(a,b);

const avrageAge = ageJonus + ageSarah / 2;
console.log(ageJonus,ageSarah,avrageAge);


// simple calculator using operator
const no1 = 90;
const no2 = 12;

console.log("Addition is:",no1 + no2);
console.log("Subtraction is:",no1 - no2);
console.log("Multiplication is:",no1 * no2);
console.log("Division is:",no1 / no2);
console.log("Modulus is:",no1 % no2);
console.log("Exponetiation is:",no1 ** no2);
console.log("Average is:",(no1 + no2) / 2);









 

