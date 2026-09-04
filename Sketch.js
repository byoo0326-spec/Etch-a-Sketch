//Etch a Sketch!


//first, lets create the function that will create the grid and its coloring logic
const container = document.querySelector(".container");
function createGrid(length) {
    for (i = 0; i < length; i++) {
        let column = document.createElement("div");
        column.classList.add("columns");
        container.appendChild(column);
        for (j = 0; j < length; j++) {
            let row = column.appendChild(document.createElement("div"));
            row.addEventListener("mouseenter", () => {
                row.setAttribute("style", "background-color : black");
            });
        }
    }
}

//lets call on that function with a width_height of 16
let width_height = 32;
let resolutionSelection = 32;
createGrid(width_height);
const buttonUI = document.querySelector(".button_UI");
const resolutionButton = buttonUI.querySelector(".resolutionSelect");
const resolutionIndicator = buttonUI.querySelector("p");
resolutionButton.addEventListener("click", resolutionSelector);

//instead of manually changing width_height in the code, we can make a function that listens for a button call
//the function will then take user input to determine the screen's resolution
//lets have this function choose a new width_height to call createGrid() with, then clear the board
function resolutionSelector() {
    resolutionSelection = Number(prompt("Select your desired resolution:"));
    alert(`Sketchboard resolution is now ${resolutionSelection} x ${resolutionSelection}!`);
    resolutionIndicator.textContent = `${resolutionSelection} x ${resolutionSelection}`;
    container.replaceChildren();
    createGrid(resolutionSelection);
}






