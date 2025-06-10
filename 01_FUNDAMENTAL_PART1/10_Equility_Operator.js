//👉Equility operator:-
//=== :- this is not convert the string into the number
//== :- this is convert string into number  
//prompt is used for put the value by the user 

const age = '18';
if(age === 18)
    console.log("You just become adult(strict)");
    
if(age == 18)
    console.log("You just become adult(loose)");

const fav = Number(prompt("What's your fav number?"));
console.log(fav);
console.log(typeof fav);

// if(fav == 23)
// {
//     console.log("23 is amazing number");
// }

if(fav === 23)
{
    console.log("23 is amazing number"); 
}
else if(fav === 7)
{
    console.log("7 is also cool number");
}
else if(fav === 9)
{
    console.log("9x is also cool number");
}
else
{
    console.log("Number is not 23 or 7");
}

if(fav !== 23)
    console.log("why not 23?");
    

        