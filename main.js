let numberOfDivsInput = document.getElementById("numberOfBoxes");
let numberOfDivs = numberOfDivsInput.value;
let etchDiv = document.querySelector(".etch");
let mouseDown = false;
let eraserSelected = false;
let eraser = document.querySelector(".eraser img");
let deleteBtn = document.querySelector(".buttons .delete");
let randomColors = false;
let randomColorsBtn = document.getElementById("randomColors");
//  number of pixels
numberOfDivsInput.addEventListener("change", () => {
  if (numberOfDivsInput.value >= 100) {
    numberOfDivsInput.value = 100;
  }
  numberOfDivs = numberOfDivsInput.value;
  createBoard();
});
// deletebtn function
deleteBtn.onclick = () => {
  let boxes = Array.from(etchDiv.querySelectorAll("div[class^='column']"));
  console.log();
  boxes.forEach((box) => {
    box.style.backgroundColor = "aliceBlue";
  });
};
// toggle eraser
eraser.onclick = () => {
  eraserSelected = !eraserSelected;
  if (eraserSelected) eraser.setAttribute("src", "images/pencil.png");
  else eraser.setAttribute("src", "images/eraser.png");
};
// function to draw
function draw(box) {
  if (eraserSelected) {
    box.style.backgroundColor = "aliceBlue";
  } else if (randomColors) {
    let rgb = generateRGB();
    box.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  } else box.style.backgroundColor = "black";
}
window.addEventListener("mousedown", () => {
  mouseDown = true;
});
window.addEventListener("mouseup", () => {
  mouseDown = false;
});
// create the board
function createBoard() {
  etchDiv.innerHTML = "";
  for (let i = 0; i < numberOfDivs; i++) {
    let row = document.createElement("div");
    row.classList.add(`row${i + 1}`);
    for (let j = 0; j < numberOfDivs; j++) {
      let column = document.createElement("div");
      column.classList.add(`column${j + 1}`);
      row.append(column);
      column.addEventListener("mouseover", () => {
        if (mouseDown) draw(column);
      });
      column.addEventListener("click", () => {
        draw(column);
      });
    }
    etchDiv.append(row);
  }
}

//generate random colors
function generateRGB() {
  let rgb = [];
  for (let i = 0; i < 3; i++) rgb[i] = (Math.random() * 255).toFixed();
  return rgb;
}
randomColorsBtn.addEventListener("click", () => {
  randomColors = !randomColors;
  if (randomColors) randomColorsBtn.style.borderColor = "cyan";
  else randomColorsBtn.style.borderColor = "transparent";
});

// create initial board
createBoard();
