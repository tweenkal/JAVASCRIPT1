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


