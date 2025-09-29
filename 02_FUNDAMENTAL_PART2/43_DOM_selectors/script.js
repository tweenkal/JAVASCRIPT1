/* 
element selector:
1)single element selector
2)multi element selector

*/


// single element selector
let element = document.getElementById("myPara");

// chnage the variable for class
// element = element.className;

// child node
// element = element.childNodes;

// innerText 
element.innerText = "Harry is good boy";
console.log(element.innerText);


// innerHtml
element.innerHTML = "<b>This is good</b>";
console.log(element);

// query selector
let sel = document.querySelector('#myPara');
sel = document.querySelector(".Myclass")
sel = document.querySelector('p');

sel.style.color = "green";
console.log(sel);



