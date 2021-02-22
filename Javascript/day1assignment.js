// create an app that determines if a word is a palindrome app

function isPalindrome(word) {
    let reverseString = "";
    for(let index=word.length - 1;index>=0;index--) {
        reverseString += word[index];
    }
    if (word == reverseString) {
        return true;
    }
    else {
        return false;
    }
}

// create an app that removes duplicates from an array

function removeDuplicates(list) {
    let mySet = new Set(list);
    let newArray = [...mySet];
    return newArray;
} 

//to test
let exampleArray = ["John","Mary", "Alex", "Steve", "Mary", "John"];
console.log(removeDuplicates(exampleArray));

// create a class which represent a "Bank Account". The Bank Account will have the following properties: first name, last name, middle name, account type, balance, status(open/closed/freezed)

class BankAccount {
    constructor(firstName, lastName, accountType, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = "";
        this.accountType = accountType;
        this.balance = balance;
        this.status = "";
    }

    newAccount(firstName, lastName, accountType, balance) {
        if (balance < 100) {
            console.log(`${deposit} is less than the $100 threshold`);
        }
        else {
            this.firstName = firstName;
            this.lastName = lastName;
            this.accountType = accountType;
            this.status = "OPEN";
        }
    }
    
    //to deposit
    deposit(amount) {
        this.balance += amount;
    }

    // A user should be able to withdraw money from the bank account, and be charged $35 fees if the balance is below $0
    withdraw(amount) {
        this.balance -= amount;
        if (this.balance < 0) {
            this.balance -= 35;
            console.log(`Notice of OVERDRAFT. You have been charged a $35 fee. Your new account balance is: ${this.balance}`)
        }
    }
    
    // User should be able to transfer money from one bank account to another.
    transfer(amount, destination) {
        this.withdraw(amount);
        destination.deposit(amount);
        }
}


