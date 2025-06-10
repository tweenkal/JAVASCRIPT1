//👉Logical operator:-
const hasDrivingLicenece = true
const hasGoodVision = true

console.log(hasDrivingLicenece && hasGoodVision);  
console.log(hasDrivingLicenece || hasGoodVision);
console.log(!hasDrivingLicenece);

// if(hasDrivingLicenece && hasGoodVision){
//     console.log("Sarah is able to drive");
// }else{
//     console.log("Someone else should drive...");
// }

const isTired = true;

if(hasDrivingLicenece && hasGoodVision && !isTired){
    console.log("Sarah is able to drive");
}else{
    console.log("Someone else should drive...");
}