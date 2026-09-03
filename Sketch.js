//Etch a Sketch!


//first, lets create the function that will create the grid
const container = document.querySelector(".container");
function createGrid(length) {
    for (i = 0; i < length; i++) {
        let column = document.createElement("div");
        column.classList.add("columns");
        container.appendChild(column);
        for (j = 0; j < length; j++) {
            let row = column.appendChild(document.createElement("div"));
        }
    }
}

//lets call on that function with a width_height of 16
let width_height = 164;
createGrid(width_height);
const squares = container.querySelectorAll(".columns div");

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






