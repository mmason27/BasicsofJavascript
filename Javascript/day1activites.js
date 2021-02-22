// activity 2 - sum of given integers

function computeSum(numberOne, numberTwo) {
    let sum = numberOne + numberTwo

    if (sum >= 50 && sum <= 80) {
        return 65
    }
    else {
        return 80
    }
}

// activity 4 - bank account class

class BankAccount {
    constructor(balance, accountType) {
        this.balance = balance
        this.accountType = accountType
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        this.balance -= amount
    }
}

// create an instance of the BankAccount class

let checkingAccount = new BankAccount(0, "checking account")
checkingAccount.deposit(100)
console.log(checkingAccount) 
checkingAccount.withdraw(50)
console.log(checkingAccount)