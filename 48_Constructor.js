// constructor :- this method is called automatically by the new so we can intially the object there.


class railwayform{
    constructor(givenname,trainno) {
        this.name = givenname;
        this.trainno = trainno;
        console.log("Constructor called..." + givenname + trainno);
    }

    preview() {
        alert(this.name + "Your form is and your train no :"   + this.trainno);
    }

    submit() {
        alert(this.name + "Your form is submitted and your train no :"   + this.trainno); 
    }

    cancel() {
        alert(this.name + "Your form is canceled and your train no :" + this.trainno);
        this.trainno = 0;
    }
}

let twinkle = new railwayform("twinkle ",6573666);
twinkle.preview();
twinkle.submit();
twinkle.cancel();
twinkle.preview();

let sahil = new railwayform("sahil ",887557);
sahil.preview();
sahil.submit();
sahil.cancel();
sahil.preview();


// task :- person

class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello , My name is " + this.name + "and I am " + this.age + " Years old");
    }
}

let person1 = new person("twinkle",21);
person1.greet();

let person2 = new person("sahil",22);
person2.greet();

//task 2 :- bank account

class BankAccount{
    constructor(accountno,accountholder,balance){
        this.accountno = accountno;
        this.accountholder = accountholder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${amount} deposited. New balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount} withdrawn. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }

    checkBalance() {
        console.log(`Account Balance: ${this.balance}`);
    }
};

let account1 = new BankAccount(101, "Alice", 500);
account1.deposit(200);    // 200 deposited. New balance: 700
account1.withdraw(100);   // 100 withdrawn. New balance: 600
account1.checkBalance();  // Account Balance: 600

let account2 = new BankAccount(102, "Bob");
account2.deposit(1000);   // 1000 deposited. New balance: 1000
account2.withdraw(1500);  // Insufficient funds
account2.checkBalance();  // Account Balance: 1000