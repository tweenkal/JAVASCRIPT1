//👉switch statement:-

const days = 'Sunday';

switch(days)  {
    case 'Monday':
        console.log("Monday");
        break;
    
    case 'Tuesday':
        console.log("Tuesday");
        break;
    
    case 'Wednsday':
    case 'Thursday':
        console.log("Wednsday and Thursday");
        break;

    case 'Friday':
        console.log("Friday");
        break;

    case 'saturday':
    case 'Sunday':
        console.log("saturday & Sunday");
        break;

    default:
        console.log("Not a valid days");
}


if(days === "Monday"){
    console.log("Monday");
} else if(days === "Tuesday"){
    console.log("Tuesday");
} else if(days === "Wednsday" || days === "Thursday"){
    console.log("Wednsday or Thursday");   
} else if(days === "Friday") {
    console.log("Friday");
} else if(days === "Saturday" || days === "Sunday") {
    console.log("Saturday or Sunday");
}


//👉difference between statement and expressions
// 13 + 12
// 1888
// true && false && false && true

//👉statement means if else etc..
//template literal is only the expression but not insert statement 