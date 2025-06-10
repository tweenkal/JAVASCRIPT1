//Challanges:-
// const scoreDophin = (96 + 108 + 89) / 3;
// const scoreKolas = (88 + 91 + 110) / 3;
// console.log(scoreDophin,scoreKolas);

// if(scoreDophin > scoreKolas){
//     console.log("Dolphin win the trophy");
// }else if(scoreKolas > scoreDophin) {
//     console.log("Kolas win the trophy");
// }else if(scoreDophin === scoreKolas) {
//     console.log("Both win the trophy");
// }


const scoreDophin = (97 + 112 + 81) / 3;
const scoreKolas = (109 + 95 + 86) / 3;
console.log(scoreDophin,scoreKolas);

if(scoreDophin > scoreKolas && scoreDophin >= 100){
    console.log("Dolphin win the trophy");
}else if(scoreKolas > scoreDophin && scoreKolas >= 100) {
    console.log("Kolas win the trophy");
}else if(scoreDophin === scoreKolas && scoreDophin >= 100 && scoreKolas >= 100) {
    console.log("Both win the trophy");
}else {
    console.log("No one win the trophy");
}