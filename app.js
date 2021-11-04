// Grab all text fields
const greeting = document.getElementById("greeting")
const intro = document.getElementById("slim-shady")
const userInput = document.getElementById("text")

// Grab all input fields
const greetingInput = document.getElementById("greeting-input")
const introInput = document.getElementById("intro-input")
const nameInput = document.getElementById("name-input")

// Grab all buttons
const greetingButton = document.getElementById("greeting-button")
const introButton = document.getElementById("intro-button")
const nameButton = document.getElementById("name-button")
const tagColorButton = document.getElementById('color-button')
const changeAll = document.getElementById('change-all')
const nameFont = document.getElementById('font-button')

// EventListener for Greeting
greetingButton.addEventListener('click', () => {
    greeting.textContent = greetingInput.value
})

// EventListener for intro
introButton.addEventListener('click', () => {
    intro.textContent = introInput.value
})

// EventListener for name
nameButton.addEventListener('click', () => {
    userInput.textContent = nameInput.value
})

// EventListener to change all fields at once
changeAll.addEventListener('click', () => {
    greeting.textContent = greetingInput.value;
    intro.textContent = introInput.value;
    userInput.textContent = nameInput.value
})

// EventListener and variables for color change
let colors = ["black", "white", "gray", "silver", "maroon", "red", "purple", "fushsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"]

const tagColor = document.getElementById('tag-color')

let i = 0;
tagColorButton.addEventListener('click', () => {
    i++;
    tagColor.style.backgroundColor = colors[i % colors.length];
    console.log(i % colors.length);
    if(i % colors.length === 1) {
        greeting.style.color = "black";
        intro.style.color = "black";
    }else{
        greeting.style.color = "white";
        intro.style.color = "white";
    }
})

let fontselection = ["Arial", "Times New Roman", "Times", "Courier New", "Courier", "Verdana", "Georgia", "Palatino", "Garamond", "Bookman", "Tahoma", "Trebuchet MS", "fantasy", "cursive", "serif", "sans-serif"]
let j = 0

nameFont.addEventListener('click', () => {
    userInput.style.fontFamily = fontselection[j % fontselection.length]
    j++
})

// console.log(greeting, greetingInput, greetingButton, intro, introInput, introButton, userInput, nameInput, nameButton, tagColor);



