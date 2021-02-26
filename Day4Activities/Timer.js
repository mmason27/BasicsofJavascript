// You have been assigned to create a countdown timer application. The user will enter the number of seconds in a textbox and press the "Start Timer" button. This will start the timer. Your app will display the timer counting down on the screen in large visible font.
let countdownHeading = document.getElementById("countdownHeading");
let userInput = document.getElementById("userInput");
let startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () { 
    let counter = userInput.value;
    
    let intervalId = window.setInterval(function () {
        
        countdownHeading.innerHTML = counter;
        counter--;

        if (counter < 0) {
        window.clearInterval(intervalId);
        }

  }, 1000);
});
