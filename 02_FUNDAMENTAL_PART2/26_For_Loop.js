//👉for loop:-

//for loop keeps running while condition is TRUE.
for(let rep=1 ; rep <= 10 ; rep++) {
    console.log(`Lifting weights repitation ${rep}`);  
}

const jonasArray = [
    'jonas',
    'Savaliya',
    2037-1991,
    'teacher',
    ['Michel','Peter','Steven'],
    true
];


const types = [];

for(let i=0 ; i<jonasArray.length ; i++) {
    //reading from jonas array
    console.log(jonasArray[i],typeof jonasArray[i]);   

    //filling for types array
    types[i] = typeof jonasArray[i];
    //second way
    // types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991,2007,2008,2009,2025];
const age = []

for(let i=0 ; i<years.length ; i++) {
    age.push(2037 - years[i])
}
console.log(age);


//continue and break
//continue is exit the current iteration of the loop and continue to the next one.
//break is  used to completly terminate the whole loop.


//continue:-
console.log("-----Only string-----");

for(let i=0 ; i<jonasArray.length ; i++) {
    if(typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i],typeof jonasArray[i]);   
}

//break:-
console.log("-----Break with number-----");
for(let i=0 ; i<jonasArray.length ; i++) {
    if(typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i],typeof jonasArray[i]);   
}


//looping backwards and loops in loops
const jonas = [
    'jonas',
    'Savaliya',
    2037-1991,
    'teacher',
    ['Michel','Peter','Steven'],
    true
];


//print reverse the array or looping backwards
for(let i=jonas.length-1 ; i>=0 ; i--) {
    console.log(i,jonas[i]);
}

//loops inside loop means nested loop
for(let exercise = 1 ; exercise < 4 ; exercise++) {
    console.log(`--------starting exercise ${exercise}`);
    
    for(let rep=1 ; rep < 6 ; rep++) {
        console.log(`Exercise ${exercise} : Lifting weight repetition ${rep} 🏋️`);
    }
}

//👉for each loop
let num = [2,3,4,5,6,7]

num.forEach((element) => {
    console.log(element*element);
});

// Print all even numbers between 1–50. using for loop
for(let i=1 ; i <= 50 ; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}


// for of loop
// Create an array of numbers → [10, 20, 30, 40, 50].
// Use a for...of loop to calculate the sum of all numbers.

let no = [10, 20, 30, 40, 50];
let sum = 0;

for(let i of no) {
    sum += i;   
};

console.log("sum =" + sum);

// Create an array of strings → ["apple", "banana", "mango"].
// Use a for...of loop to print each fruit in uppercase.

let fruits = ["apple", "banana", "mango"];

for(let i of fruits) {
    console.log(i.toUpperCase());
}

// Create a string → "JavaScript".
// Use a for...of loop to print each character one by one.

let string = "javascript";

for(let i of string) {
    console.log(i);
}

// for in loop
// Create an object called car with properties:
// brand: "Toyota"
// model: "Corolla"
// year: 2020
// 👉 Use a for...in loop to print all the keys and their values.

let car = {
    brand : "Toyota",
    model : "corolla",
    year : 2020
};

for(let i in car) {
    console.log(i , " : " , car[i]);   
}


// Create an object called student with these properties:
// name: "Riya"
// age: 21
// grade: "A"
// marks: { math: 90, science: 85, english: 88 }
// Using a for...in loop, print only the keys of the student object (not the values).
// Then, using another for...in loop, print all the values of the marks object inside the student.

let student = {
    name : "riya",
    grade : "A",
    marks : {
        math : 90,
        science : 85,
        english : 88
    }
}

for(let i in student){
    console.log(i);
}

for(let i in student.marks){
    console.log(i + ":" + student.marks[i]);
}

