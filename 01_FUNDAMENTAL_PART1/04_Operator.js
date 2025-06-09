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

//👉operator precedence
console.log(25 - 10 - 5);

let a , b;
a = b = 25 - 10 - 5;
console.log(a,b);

const avrageAge = ageJonus + ageSarah / 2;
console.log(ageJonus,ageSarah,avrageAge);





 

