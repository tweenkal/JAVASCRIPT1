//👉map,reduce,filter:-

//👉1)map:-Transforms each item in an array and returns a new array.
let arr = [45,67,45];
let a = arr.map((value,index,array) => {
    console.log(value,index,array);
    return value + index;
})

console.log(a);

//👉2)filter :-Keeps only the items that match a condition.
let arr2 = [2,3,4,5,10];
let a2 = arr2.filter((Value) => {
    return Value < 5;
})
console.log(a2);

//👉3)reduce :- Combines all items into a single value.reduce return a one value.
let arr3 = [1,2,3,4,5];
let a3 = arr3.reduce((value1,value2) => {
    return value1 + value2;
});
console.log(a3);   //1+2=3,3+3=6,6+4=10,10+5=15.  //1+2+3+4+5 = 15


//practice:-
// let arr4 = [10,20,30,40];
// let a4 = prompt("Enter a no=");
// a4 = Number.parseInt(a4);
// arr4.push(a4);
// console.log(arr4);


