//👉Conditional statement:-
//👉it is simillar to the if else but it is declare to the one line

const age = 12;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? 'win': 'water';
console.log(drink);


let drink2;
if(age >= 18){
    drink2 = 'win';
}else {
    drink2 = 'water';
}
console.log(drink2);

//👉in template literal using conditional 
console.log(`I like to drink ${age >= 18 ? 'win' : 'water'}`);
