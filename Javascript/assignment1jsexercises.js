// palindrome app

function isPalindrome(word) {
    let reverseString = ""
    for(let index=word.length - 1;index>=0;index--) {
        reverseString += word[index]
    }
    if (word == reverseString) {
        return true
    }
    else {
        return false
    }
}

// create an app that removes duplicates from an array

let exampleArray = ["John","Mary", "Alex", "Steve", "Mary", "John"] 
let mySet = new Set(exampleArray)
let newArray = [...mySet]

console.log(newArray)
