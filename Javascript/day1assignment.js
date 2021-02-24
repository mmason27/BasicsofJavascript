// 1. create an app that determines if a word is a palindrome app

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

// 2. create an app that removes duplicates from an array

function removeDuplicates(list) {
    let mySet = new Set(list);
    let newArray = [...mySet];
    return newArray;
} 

// to test

let exampleArray = ["John","Mary", "Alex", "Steve", "Mary", "John"];
console.log(removeDuplicates(exampleArray));

// 3. create an app which returns true/false depending on if the item is in the array

function inArray(list, item) {
    let testArray = list.includes(item);
    return testArray;
} 

console.log(inArray(exampleArray, "Alex"));

// 4. create an app which finds the largest number in an array

numbersArray = [1, 5, 18, 2, 7, 98, 32];

function largestNumber(list) {
    list.sort(function(a, b){return b-a});
    return list[0]
}

console.log(largestNumber(numbersArray));

// 5. create an app which finds the smallest number in an array

function smallestNumber(list) {
    list.sort(function(a,b){return a-b})
    return list[0]
}

console.log(smallestNumber(numbersArray));

// 6. create a fizzbuzz app.  If the number is divisible by 3 then print "Fizz", if the input it divisible by 5 then print "Buzz". If the input is divisible by 3 and 5 then print "Fizz Buzz".

function fizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz");    
    }
    else if (number % 5 == 0) {
        console.log("Buzz");
    }
    else if (number % 3 == 0) {
        console.log("Fizz");
    }
    else {
        console.log("Sorry, that number is neither divisible by 3 nor 5. It's a fizzbust!");
    }

}

fizzBuzz(15);

// 7. create an app which determines if the number is even or odd

function isEven(number) {
    if (number % 2 == 0) {
        console.log("EVEN")
    }
    else {
        console.log("ODD")
    }
}

// 8. take the array [3,4,56,7,8,1] and sort it in ascending and descending order.

numbers = [3,4,56,7,8,1];
numbers.sort(function(a-b){a-b});
console.log(numbers[0])

function ascendingOrder(list) {
    
}

isEven(16);

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


