//👉innerHtml :- the innerHtml is the property allow to get the
//  html inside the element as a string.innerHtml is valid only for
// element nodes for other nodes types we can use nodevalue or data
//👉Represents the HTML content inside an element. 

//👉outerHtml :- the outerHtml property contains the full html
//  innerHtml + the element itself. 
//👉Represents the entire HTML element, including the element itself. 

const div = document.getElementById("myDiv");
console.log("innerHTML:", div.innerHTML);

// Change innerHTML
// div.innerHTML = "<h2>Updated Content</h2>";

console.log("outerHTML:", div.outerHTML);

