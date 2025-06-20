// alert("hello");

//advantage of seprate means exteranal script tag
//1.seprations of concern
//2.browser caching

alert("Enter the value of a:");
let a = prompt("Enter the a:","789"); //second value is the default value
a = Number.parseInt(a);
document.write(a); //it is print the content browser
alert("type of for a =" + (typeof a));
let b = confirm("Doy write content for the page?");
if(b) {
    document.write(b);
}
else {
    document.write("sorry") ;   
}
