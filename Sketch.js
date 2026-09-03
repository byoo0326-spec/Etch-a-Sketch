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
let width_height = 164;
let numOfDivs = width_height * width_height;
createGrid(width_height);
const squares = container.querySelectorAll(".columns div");
const resolutionIndicator = container.querySelector("p");
const resolutionButton = document.querySelector(".button_UI").querySelector(".resolutionSelect");
resolutionButton.addEventListener("click", resolutionSelector)

//lets set up the event listeners
//we will make it so when the mouse enters a square, it is black, and when it comes off, it turns transparent
squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.setAttribute("style", "background-color : black");
    });
    square.addEventListener("mouseout", () => {
        square.setAttribute("style", "background-color : transparent");
    });
});

//instead of manually changing width_height in the code, we can make a function that listens for a button call
//the function will then take user input to determine the screen's resolution
//lets have this function choose a new width_height to call createGrid() with, then clear the board
function resolutionSelector() {
    let resolutionSelector = Number(prompt("Select your desired resolution:"));
    alert(`Sketchboard resolution is now ${resolutionSelector} x ${resolutionSelector}!`);
    resolutionIndicator.textContent = `${resolutionSelector} x ${resolutionSelector}`;
    for (i = 0; i < numOfDivs; i++) {
        container.removeChildAll("div");
    }
    createGrid(resolutionSelector);
}


// row.addEventListener("mouseout", () => {
//                 row.setAttribute("style", "background-color : transparent");
//             });




