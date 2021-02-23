// In this activity you are going to present the user with two buttons with labels "Red" and "Blue". When the user clicks on the red button then the page background will change to red and when the user clicks on the blue button, page background will change to blue.

function changeBackground(color) {
    document.body.style.background = color;
}

redButton.addEventListener("click", function() {
    changeBackground("red");
})

blueButton.addEventListener("click", function() {
    changeBackground("blue");
})