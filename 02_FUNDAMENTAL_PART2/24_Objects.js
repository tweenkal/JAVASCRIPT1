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
// const interstIn = prompt("What do you want to know about jonas?Choose between firstName,lastName,age,job and friends");

// if (jonas[interstIn]) {
//     console.log(jonas[interstIn]);
// } else {
//     console.log("Wrong request!Choose between firstName,lastName,age,job and friends");
// }

// jonas.location = "Portugarl";
// jonas['twitter'] = "@abcjonas";
// console.log(jonas);

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


// Create a person object with name, age, and a greet() method.

person = {
    name : "twinkle",
    age : 21,
    greet : function() {
        console.log("Hello ,My name is " + this.name + " and My age is" + this.age);
        
    }    
};

console.log(person.name);
console.log(person.age);
person.greet();


// nested objects
let user = {
    id : 101,
    email : "twinkle@gmail.com",
    personalInfo : {
        name : "twinkle",
        adress : {
            city : "Ahmedabad",
            country : "India",
        }
    }
}


console.log("all info:",user);
console.log("PersonalInfo:",user.personalInfo);
console.log("Adress:",user.personalInfo.adress);


// 

let student = {
    name : "twinkle",
    age : 21,
    marks : {
        math : 90,
        science : 70,
        english : 80
    },

    getAverage: function () {
        let total = this.marks.math + this.marks.science + this.marks.english;
        return total / 3;
    },

    introduce: function() {
        console.log(`Hy my name is " + ${ this.name }+ "and i am " + ${this.age} + "years old`);
        
    }
};

student.introduce();
console.log(student.getAverage());













