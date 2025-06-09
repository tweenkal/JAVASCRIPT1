//👉string:-
const firstName = "jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);


//👉template literal:-
//👉it is can assemble multiple pieaces into one final string.
const jonusNew = `I am ${firstName} ,a ${year - birthYear} years old ${job}!`;
console.log(jonusNew);
  
console.log(`This is the string...`);

//👉multi-line string
console.log('string with \n\
multiple \n\
lines');

//👉using template literals.
console.log(`string with
multiple
lines`);


