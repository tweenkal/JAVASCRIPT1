class railwayform {
    submit() {
        alert(this.name + ": Form is submitted" + this.train);
    }
    cancel() {
        alert(this.name + ": Form is canceled" + this.train);
    }
    fill(givenName,trainno) {
        this.name = givenName;
        this.train = trainno;
    }
}

let twinkle = new railwayform();
twinkle.fill("twinkle",1234445);
let sahil = new railwayform();
sahil.fill("sahil",4555245);

twinkle.submit();
sahil.submit();
twinkle.cancel();


// task :-
// Exercise: Create a Car class with properties and a method.

class car{
    constructor(brand,model,year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} ${this.year}`);   
    }
}

let car1 = new car("Toyota","corolla",2020);
let car2 = new car("tesla","model 3",2022);

car1.start();
car2.start();