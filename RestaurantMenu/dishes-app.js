// Create a page which displays all the dishes on a web page

// Target our html, save them to variables that are easy to use in js
const mainContent = document.getElementById("mainContent");
const buttons = document.getElementById("buttons");
const starterButton = document.getElementById("starterButton");
const entreeButton = document.getElementById("entreeButton");
const dessertButton = document.getElementById("dessertButton");

// Filter through our dishes to find which belongs in each category of dish. This is so users can click Starters and only see the starters, etc
let starters = dishes.filter(function(dish) {
    if (dish.course === "Starters") {
    return dish;
    }
})

console.log(starters);

let entrees = dishes.filter(function(dish) {
    return dish.course === "Entrees";
})

console.log(entrees);

let desserts = dishes.filter(function(dish) {
    return dish.course === "Desserts";
})

console.log(desserts);

// Now we need to connect our buttons to the content so that when they click a button the correct content will load

starterButton.addEventListener("click", function(){
    // This first line is so the page clears when you click the next button, instead of loading new content on top of the current content
    mainContent.innerHTML = ""
    
    // Here we're using the map function bc we want to create (return) a new array using our original array in dishes.js so that we can easily access the properties in dish 
    starters.map(function(dish){
        let starterDish = `
        <div>
        <img src="${dish.imageURL}">
        <h3>${dish.title}</h3>
        <h3>${dish.description}</h3>
        <h3>$${dish.price}</h3>
        </div>
        `
        // We're adding our new array to the html element within the event listener bc when we click the button for starters, we want all of the information above (image, title, description, and price) to render on the html page
        mainContent.innerHTML += starterDish;
    })
})

entreeButton.addEventListener("click", function(){
    mainContent.innerHTML = ""
    entrees.map(function(dish){
        let entreeDish = `
        <div>
        <img src="${dish.imageURL}">
        <h3>${dish.title}</h3>
        <h3>${dish.description}</h3>
        <h3>$${dish.price}</h3>
        </div>
        `
        mainContent.innerHTML += entreeDish;
    })
})

dessertButton.addEventListener("click", function(){
    mainContent.innerHTML = ""
    desserts.map(function(dish){
        let dessertDish = `
        <div>
        <img src="${dish.imageURL}">
        <h3>${dish.title}</h3>
        <h3>${dish.description}</h3>
        <h3>$${dish.price}</h3>
        </div>
        `
        mainContent.innerHTML += dessertDish;
    })
})
