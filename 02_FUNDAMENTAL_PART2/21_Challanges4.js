//challanges 4:-

const calAvg = (a,b,c) => (a + b + c) / 3;
console.log(calAvg(3,4,5));

let scoreDolphin =  calAvg(44,23,71);
let scoreKolas = calAvg(65,54,49);
console.log(scoreDolphin,scoreKolas);

const checkWinner = function(avgDolpins,avgKolas) {
    if(avgDolpins >= 2 * avgKolas) {
        console.log(`Dolphins win (${avgDolpins}) vs. (${avgKolas})`);
    } else if (avgKolas >= 2 * avgDolpins){
        console.log(`Kolas win (${avgKolas}) vs. (${avgDolpins})`);
    } else {
        console.log("No team wins...");
    }
}

checkWinner(scoreDolphin,scoreKolas);
checkWinner(576,111);

//reassign the score
scoreDolphin = calAvg(85,54,41);
scoreKolas = calAvg(23,34,27);
console.log(scoreDolphin,scoreKolas);
checkWinner(scoreDolphin,scoreKolas);
