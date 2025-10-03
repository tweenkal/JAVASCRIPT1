// settimeout :- Runs a function once after a given delay (in milliseconds).
// setinterval :- Runs a function repeatedly after a given time interval.
// promise :- A Promise represents a value that will be available now, later, or never (success or failure).


// set time out:-
// give me the alert message for after 2 sec

// document.write("Hello");

// let a = setTimeout(function () {
//     alert("Hello this is execute after 2 sec")
// }, 10000);


// let b = prompt("Do you want to time out?")
// if("no" == b) {
//     clearTimeout(a);
// }
// console.log(a);

// sum of two no after 1 sec

// const sum= ((a,b) => {
//     console.log("yes i am running" + (a+b));
// });

// setTimeout(sum , 1000, 1,5);

// Exercise: Create a timer that logs a message after 3 seconds.

setTimeout( () =>  {
    console.log("⏰ Timer finished! This message appears after 3 seconds.");
},3000);


// task :-
console.log("Countdown start");

setTimeout(() => {
    console.log(3);
},0);

setTimeout(() => {
    console.log(2);
},1000);

setTimeout(() => {
    console.log(1);
},3000)

// task

let btn = document.querySelector("#btn");

btn.onclick (() => {
    
})





// set interval :=

// setInterval(function () {
//     alert("This is set interval");
// },3000);

// task set interval:-

const sum = ((a,b) => {
    console.log("sum of :" + (a + b));
})

setInterval(sum, 3000, 5, 5);




