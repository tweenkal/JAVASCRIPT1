// spread operator
// convert array to object

let arr = [10,20,30];
let obj = {...arr}
console.log(obj);  //{ '0': 10, '1': 20, '2': 30 }

function sum(v1,v2,v3){
    return v1 + v2 + v3;
}

console.log(sum(...arr));

// for object
let obj1 = {
    name : "twinkle",
    company : "xyz",
    address : "xyz"
};

console.log({...obj1 , company : "abc"});
console.log({company : "abc",...obj1 }); //this is will print the obj2 object without changing any value.


// spread operator
// Function that sums any number of arguments. for simple and easy method

let arr1 = [10, 20, 30];

function add(a, b, c) {
  return a + b + c;
}

console.log(add(...arr1)); // 60


