let btn = document.querySelector("#btn");

btn.onclick = () => {
    document.body.style.background = "pink";
};

let btn2 = document.querySelector("#btn2");

btn2.onmouseover = () => {
    document.body.style.background = "yellow";
};

let btn3 = document.querySelector("#btn3");

btn3.ondblclick = () => {
    document.body.style.background = "red";
};


// addEventlistener :- using the this event listener work for multiple time
let p = document.querySelector("#hover");
p.addEventListener("mouseover", () => {
    document.body.style.color = "blue";
});

const handle = () => {
    console.log("hello1");
};

p.addEventListener("mouseover",handle);

p.addEventListener("mouseover", () => {
   console.log("hello2");
});

// remove event listener
p.removeEventListener("mouseover",handle);

let modebtn = document.querySelector("#modebtn");
let currmode = "light";

modebtn.addEventListener("click", () => {
    if(currmode === "light") {
        currmode = "dark";
        document.body.style.background = "black";
    }
    else {
        currmode = "light";
        document.body.style.background  = "white";
    }
    console.log(currmode); 
});


// input event
const inputBox = document.getElementById("myInput");
const output = document.getElementById("output");

// Add input event listener
inputBox.addEventListener("input", function(event) {
  output.innerText = "You typed: " + event.target.value;
});