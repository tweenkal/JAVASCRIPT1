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
 





 






 
