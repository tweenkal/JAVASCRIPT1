//👉In getElementsByName means it return all element:
//👉In getElementByName means it return only one element 

// 👉let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = "red"

//👉document.getElementByID :- the method is used to get the element 
// with a given id attribute.

// let ctitle = document.getElementById("firstchild")
// ctitle.style.color = "red"

//👉document.queryselector :- returns the first element for given css
//  selector a efficent version of  elem querySelecterAll(css)[0].it
//return only one element 

// let ctitle = document.querySelector(".card-title")
// ctitle.style.color = "blue";

let ctitle1 = document.querySelector(".this")
ctitle1.style.color = "black"

//👉document.querySelectorAll :- returns all element inside an element
// matching the given css selector.

let ctitle = document.querySelectorAll(".card-title")
ctitle[0].style.color = "blue";
ctitle[1].style.color = "red";
ctitle[2].style.color = "pink";
console.log(ctitle);

//👉document.getElementByTagName  :-return element with the given 
// tag name

console.log(document.getElementsByTagName("a"));
console.log(document.body.getElementsByTagName("a"));

//👉document.getElementsByName :- searches element by the name
// attribute

console.log(document.getElementsByName("card"));




 

