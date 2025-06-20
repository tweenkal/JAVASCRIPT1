// 3 method from search to DOM. 

//👉matches :- to check if element matches the given css selector.
let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1);
console.log(id1.matches(".class"));  //false
console.log(id1.matches(".box"));  //true

//👉closest :- to look for the nearest ancester that matches the given css
//  selector the element itself is also checked.
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));
 
//👉contains :- returns true if element is B is inside element
//  of A or when elem A == elem B
console.log(id1.contains(sp1));  //true
console.log(sp1.contains(sp1));  //true
console.log(sp1.contains(id1));  //false

