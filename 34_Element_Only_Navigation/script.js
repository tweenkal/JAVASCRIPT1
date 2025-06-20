// i am use the first child node it is the text node,comment node,element node.

const changeBodyRed  = () => {
    document.body.firstElementChild.style.background = "red";
}
// changeBodyRed();

let b = document.body
console.log("First child of b is:",b.firstChild)
console.log("First element child of b is:",b.firstElementChild);

