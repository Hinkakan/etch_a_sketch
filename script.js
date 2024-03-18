// Size of screen
const size = 960;
// find main container
const main_container = document.querySelector(".main_container");
// Find button and add eventlistener
const button = document.querySelector("#NewGrid");
button.addEventListener('click', () => newGrid());

//Assign number of boxes to define it globally
let NumBoxes = 16;
// Value to 'contain' shades
let blackValue = 255;

//Function to change color
function colourIt(e) {
    //Darken the tone
    blackValue = blackValue - (255/NumBoxes);

    let id = e.target.id;
    let ele = document.querySelector(`#${id}`);
    let t = ele.getAttribute("style");
    t = t + `; background-color : rgb(${blackValue}, ${blackValue}, ${blackValue}`;
    ele.setAttribute("style", t);
};


function addGrid(boxes) {
    //Reset global var
    NumBoxes = boxes;
    //Calculate witdh
    const side = Math.round((size / Math.sqrt(NumBoxes)));

    // Create box
    for (let i = 1; i<= NumBoxes; i++) {
        let box = document.createElement("div");
        box.setAttribute("style", `width : ${side}px; height : ${side}px`);
        box.setAttribute("id", `e${i}`);
        box.classList.add("box");
        box.addEventListener("mouseover", (e) => colourIt(e));
        main_container.appendChild(box);
    };
};

function newGrid() {
    for (let i = 0; i < main_container.childElementCount; i) {
        let delBox = document.querySelector(`#${main_container.childNodes[i].id}`);
        delBox.remove();
    };
    // Reset coloring
    blackValue = 255;
    // Verify that new grid is square
    let loopBreaker = false;
    while (loopBreaker === false) {
        var NumBoxes = prompt("Number of boxes?", 16);
        if (Number.isInteger(Math.sqrt(NumBoxes)) === true) {
            loopBreaker = true;
            addGrid(NumBoxes);
        } else {
            alert("Please only use valid square-root numbers e.g. 4, 9, 16, 25...")
        };
    };
}

addGrid(NumBoxes);
