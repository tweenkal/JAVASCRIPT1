//👉Reviewing function:-

const calcAge = function(year) {
    return 2025 - year;
}

const yearUntilRetierment = function(birthYear,firstName){
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearUntilRetierment(2004,"twinkle"));   
console.log(yearUntilRetierment(1940,"Jay"));

