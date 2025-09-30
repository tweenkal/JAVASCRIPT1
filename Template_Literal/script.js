// string method
// concate

html = "<h1>Hello</h1>" + "<p>Twinkal</p> 123";
html = html.concat('this',' str');
console.log(html);

// length
console.log(html.length);

// toLowercase
console.log(html.toLowerCase());

// toUpperCase
console.log(html.toUpperCase());

// indexing
console.log(html[0]);
console.log(html[1]);

// indexOf
console.log(html.indexOf('llo'));

// lastIndexOf
console.log(html.lastIndexOf("Twi"));

// charAt
console.log(html.charAt(3));

// endsWith
console.log(html.endsWith("3"));
console.log(html.endsWith('>'));

// includes
console.log(html.includes(" "));

// substring
console.log(html.substring(0,4));

// slice
console.log(html.slice(-4));

// split
console.log(html.split('>'));

// replace
console.log(html.replace("Hello","hellllo"));


// template literal 
let name = "Twinkle";
let fruit1 = "orange";
let fruit2 = "apple";

let myHtml = `my name is ${name} and i like the fruit ${fruit1} and ${fruit2}`;
console.log(myHtml);
// document.body.innerHTML(myHtml);









