//1.store marks and johns and height in variables.
//2.calculate both their BMIs using the formula(you can even
//  implement both variables). 
//3.create a boolean variable 'markHigherBMI' containing information
//  about whether mark has a higher BMI than john. 

//Test data 1:- marks weights 78 kg and is 1.69 m tall.john weight 92
//  kg and is 1.95 m tall. 
//Test data 2:-marks weights 95 kg and is 1.88 m tall.john weights 85
//  kg and is 1.76 m tall. 


// const massMark = 78;
// const heightMark = 1.68;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark,BMIJohn,markHigherBMI);

if(BMIMark > BMIJohn)
{
    console.log(`Mark's BMI (${BMIMark}) is higher than john's (${BMIJohn})`);
}
else
{
    console.log(`john's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}
