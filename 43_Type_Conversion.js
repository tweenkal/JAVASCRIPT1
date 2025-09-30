// convert int to string

let myVar = String(21);
console.log(myVar , (typeof myVar));

let booleanVar = String(true);
console.log(booleanVar , (typeof booleanVar));

let date = String(new Date());
console.log(date , (typeof date));

let arr = String([1,2,3,4,5]);
console.log(arr.length , (typeof arr));

let i = 8;
console.log(i.toString());

// string to number
let str = Number("3434");
console.log(str , (typeof str));

let no = parseInt("4535");
console.log(no, (typeof no));

// type coersion

let str1 = "788";
let num = 78;
console.log(str1 + num);

let str2 = Number("788");
let num1 = 78;
console.log(str2 + num1);


// task of template literal
// Create a message like “Hello, [name]! You are [age] years old.”

let name = "Twinkle";
let age = 21;

result = `Hello , ${name}! You are ${age} years old`;
console.log(result);

