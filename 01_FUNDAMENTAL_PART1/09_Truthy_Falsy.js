//👉Truthy and Falsy values:-
//👉5 falsy values:- 0,'',undefind,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

//the conversion to boolean is always implicite,not explicite.

const money = 0;
if(money)
{
    console.log("dont spend it all");
}
else
{
    console.log("You should get a job")
}


const money1 = 100;
if(money1)
{
    console.log("dont spend it all");
}
else
{
    console.log("You should get a job")
}


let height;
if(height)
{
    console.log("height is defind");
}
else
{
    console.log("height is not defind");
}

