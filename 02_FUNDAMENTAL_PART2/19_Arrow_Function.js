//👉Arrow function:-
//👉Arrow function is simply form for the function expression that is 
//shorter and therfor faster to write.  
//👉it is lot of easier and faster to write the first reason for 
// that is that we dont need the curly braces like we have here to
// define a code block and second that return actually happens
// implicitly so this value here will automatically be returned 
// without us having to explicitly write the return keyword.

const calcAge = birthYear => 2025 - birthYear;
console.log(calcAge(2004));


const yearUntilRetierment = (birthYear,firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `The ${firstName} retires in ${retirement} years`
}
console.log(yearUntilRetierment(2004,"Twinkle"));
console.log(yearUntilRetierment(2003,"Jurali"));

