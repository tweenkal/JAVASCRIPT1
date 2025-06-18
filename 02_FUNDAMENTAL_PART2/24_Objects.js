//👉Objects:-
//👉objects define using {}.
//👉objects is define for the key value pairs.
//👉it is just like the array.
// 


//simple way to creating object
const jonas = {
    firstName: "Jonas",
    lastName: "Savaliya",
    job: "Teacher",
    friends: ['Jay', 'Jurali', 'Twinkle']
};

console.log(jonas);

//give me the last name
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKeys = "Name";
console.log(jonas["first" + nameKeys]);  //jonas
console.log(jonas["last" + nameKeys]);  //savaliya

//using prompt input by the user
const interstIn = prompt("What do you want to know about jonas?Choose between firstName,lastName,age,job and friends");

if (jonas[interstIn]) {
    console.log(jonas[interstIn]);
} else {
    console.log("Wrong request!Choose between firstName,lastName,age,job and friends");
}

jonas.location = "Portugarl";
jonas['twitter'] = "@abcjonas";
console.log(jonas);

//challanges
//jonas has 3 friends ,and his best friend is called  jay.
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);

//👉objects methods:- 
const jonas1 = {
    firstName : 'Jonas',
    lastName : 'Savaliya',
    birthYear : 1991,
    job : 'teacher',
    friends : ['Jay','jurali','tweenkal'],
    hasDrivingLicenece : true,

    // calcAge : function(birthYear) {
    //     return 2037 - birthYear;
    // }

     calcAge : function() {
        this.age =  2037 - this.birthYear;
        return this.age;
    },

    getSummery : function() {
        return `${this.firstName} is a ${this.calcAge()} -years old ${jonas1.job},and he has ${this.hasDrivingLicenece ? 'a' : 'no'} drivers licence`;
    }
};

console.log(jonas1.calcAge());
console.log(jonas1.age);

// console.log(jonas1['calcAge'](1991));
console.log(jonas1.getSummery()) ;


// The this keyword in JavaScript refers to the object that is 
// currently executing the code. Its value changes depending on
//  how and where it is used











