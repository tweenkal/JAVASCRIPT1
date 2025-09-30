// Destructuring:-
// destructuring assignment is used to unpack values from an array or properties from 
// objects into distinct variables.

// let arr = [3,5,8,12,12,4];
// let [a,b,c,d,...rest] = arr;   

// no need this
// let a = arr[0];
// let b = arr[1];

// console.log(a,b,c,d,rest);  //3 5 8 12 [ 12, 4 ]

// let [a, , , ...rest ] = arr;
// console.log(a,rest);  // output:-3 [ 12, 12, 4 ]

// task
// Destructure objects/arrays.

// destructuring array
const numbers = [10, 20, 30];

// normal way
// let a = numbers[0];
// let b = numbers[1];

// destructuring way
let [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


// Destructuring objects
const student = {
  name: "Ali",
  age: 20,
  city: "Lahore"
};

// normal way
// let name = student.name;
// let age = student.age;

// destructuring way
let { name, age, city } = student;

console.log(name); // Ali
console.log(age);  // 20
console.log(city); // Lahore

