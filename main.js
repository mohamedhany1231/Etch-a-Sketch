let numberOfDivs = 16;
let etchDiv = document.querySelector(".etch");
let mouseDown = false;
// function to draw
function draw(box) {
  box.style.backgroundColor = "black";
}
window.addEventListener("mousedown", () => {
  mouseDown = true;
});
window.addEventListener("mouseup", () => {
  mouseDown = false;
});
// create the board
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
  }
  etchDiv.append(row);
}
