//👉Array is the data structure.array is like big container into
// which we can throw variables and then letter refrence them and 
// that super important 
//👉Two most important data structure in javascript is arrays and
//  objects. 

//create the simple array 
const friends = ["Tweenkal","Hinal","Heli"];
console.log(friends);

//another way for create array using array function
const years = new Array(1991,1992,1993,1994);
console.log(years);

//what is the first element in the friends array
console.log(friends[0]);
console.log(friends[2]);

//get the actual elements number in the array
console.log(friends.length);
console.log(friends[friends.length - 1]);

//change the name for heli to jurali in friends array
friends[2] = "Jurali";
console.log(friends);

const firstName = 'Tweenkal';
const Tweenkal = [firstName,"Pansuriya",2025-2004,"Devloper",friends];
console.log(Tweenkal);
console.log(Tweenkal.length);

//Exercise:-
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const year = [1990,2000,2001,2002,2003,2004];
// console.log(calcAge(year));
 
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length-1]);  //give me the last element in the array

console.log(age1,age2,age3);

//47 37 33 this values make the array
const ages = [calcAge(year[0]),calcAge(year[1]),calcAge(year[year.length-1])];
console.log(ages);


//array methods:-
//1)push:- add element in the array at the end
const friend = ["Tweenkal","Hinal"];
const newLength = friend.push("Heli","Jay");
console.log(friend);
console.log(newLength);

//2)unshift :- add elements in the beginning of the array.
friend.unshift("Jurali");
console.log(friend);

//3)pop:- it is remove the last element of the array.
const popped = friend.pop();  //remove bydefault last element jay
friend.pop(2); //remove specific element
console.log(popped);
console.log(friend);

//4)shift :- remove first element in the array
friend.shift();
console.log(friend);

//5)indexOf :- find the element of the index number
console.log(friend.indexOf("Hinal")); //1
console.log(friend.indexOf("Heli")); //-1 

//6)includes:-returning the index of the element simply returns 
// true if the element is in the array and false if its not.

friend.push(23);
console.log(friend.includes("Tweenkal"));  //true
console.log(friend.includes("Heli"));   //false
console.log(friend.includes(23));
console.log(friend.includes("23"));

if(friend.includes("Hinal")) {
    console.log("You have friend called Hinal");
} else {
    console.log("You have not friend called Hinal");
}

//👉array.from() :- used to create an array from any other object.
let name ="hello";
let arr = Array.from(name);
console.log(arr);
 
// ===========================================================================
// Task:- 
// Create an array of fruits and manipulate it.
let fruits = ["Banana","Orange","Apple","Mango"];
let fruits1 = ["Pinaple","Cherry"];
console.log(fruits);

// access the "orange"
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]); //undefind because this is not exist in array

// find the length of the array
console.log("Length of fruits=",fruits.length);

// change the name for "Mango" to "Papaya"
fruits[3] = "Papaya";
console.log(fruits);

// add the "Strobary" for this array
fruits[4] = "Storabary";
console.log(fruits);

// print the all fruits name for line by line
for(let i=0 ; i<fruits.length ; i++){
    console.log(fruits[i]);
}

// join the fruits using |
let c = fruits.join("|");
console.log(c);

// pop the "Mango"
fruits.pop();
console.log(fruits);

fruits.pop(2);
console.log(fruits);

// push the "Mango"
fruits.push("Mango");
console.log(fruits);

// unshift :- add the storbary for the starting
fruits.unshift("Strobary");
console.log(fruits);

// shift :- remove first element
fruits.shift();
console.log(fruits);

// update :- update the "Orange" to "Pinaple"
fruits[1] = "Pinaple";
console.log(fruits);

// slice :- 
let slice = fruits.slice(0,4);
console.log(slice);

// concate
let concate = fruits.concat(fruits1);
console.log(concate);

// sort
fruits.sort();
console.log(fruits);

// reverse the array
fruits.reverse();
console.log(fruits);

// splice :-add the new element in the array  (start,stop,add)
let deletevalues = fruits.splice(2,2,100,101);
console.log(fruits);
console.log(deletevalues);

// using for loop print the num line by line
num = [13,23,56,43,24];

for(i=0 ; i<num.length ; i++){
    console.log(num[i]);   
}
    
// print the square for element in the array
num1 = [13,23,56,43,24];

num1.forEach((element) => {
    console.log(element * element);
});

// array.from create array from the string
let name1 = "Harry";
let arr1 = Array.from(name1)
console.log(arr1);

// for...of loop for array
for(let i of num1) {
    console.log(i);
}

// for...in loop for array  
for(let item in num1) {
    console.log(item);   //it is print the key means index
} 

for(let item in num1) {
    console.log(num1[item]);   //it is print the value of num1
} 

// task:-
// Loop through an array of objects and print values.
person = [
    {name : "Twinkle",age : 21},
    {name : "Jurali" , age : 19},
    {name : "Jasmin" , age : 20},
    {name : "Jay" , age : 24},
    {name : "Heni", age : 7}
]

// forEach loop
person.forEach((person) => {
    console.log("name : " + person.name + ", age :" + person.age);
});

// for...of loop
for(let i of person) {
    console.log("name : " + i.name + ", age :" + i.age);   
}

// for...in loop
for(let i in person){
    console.log("name : " + person[i].name + ", age :" + person[i].age);   
}


// higher method in array
// map , filter and reduce

//map() :- create an new array by performing some operation an each array element.

let arr2 = [10,20,30];
let a = arr2.map((value,index,array) => {
    console.log(value,index,array);
    return value + 1
});

console.log(a);


// filter():-  filter array with values that passes a test creates a new array

let arr3 = [10,40,6,4,2,5];
let newarr3 = arr3.filter((value) => {
    return value < 10;
});

console.log(newarr3);


// reduce():- reduce an array to a single value

let arr4 = [1,2,3,4,5];
const reduce_func= (h1,h2) => {
    return h1 + h2;
};

let newarr4 = arr4.reduce(reduce_func);
console.log(newarr4);

// task :-
// Transform an array of numbers to double their value.

let arr5 = [1,2,3,4,5];
let newarr5 = arr5.map((value) => {
    return value * 2;
})

console.log(newarr5);

