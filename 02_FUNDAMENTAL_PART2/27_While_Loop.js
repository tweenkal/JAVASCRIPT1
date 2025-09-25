//👉while loop:-

let rep = 1;
while(rep <= 10)  {
    console.log(`Lifring weights repetation ${rep}👉🏋️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log("Loop about to end");   
}

// Print all even numbers between 1–50. using for loop
i = 1;
while(i <= 50){
    if(i % 2 == 0){
        console.log(i);     
    }
    i++; 
}