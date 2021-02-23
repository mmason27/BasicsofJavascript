// you will create a webpage which will take firstname, lastname as input from the user. Once, the user fills in their firstname and lastname and clicks the submit button, you will concatenate their firstname and lastname together to display their fullname.

let firstNameTextBox = document.getElementById("firstNameTextBox");
let lastNameTextBox = document.getElementById("lastNameTextBox");

let fullNameHeading = document.getElementById("fullNameHeading");

let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", function() {

let firstName = firstNameTextBox.value;
let lastName = lastNameTextBox.value;

fullNameHeading.innerHTML = firstName + "" + lastName;
})


