// Return Elements Using Selectors for Button, Grid, & Color Input
const btnCreateGrid = document.querySelector(".btn-create-grid");
const gridContainer = document.querySelector(".grid");
const colorPicker = document.querySelector("input[type=color]");

btnCreateGrid.addEventListener("click", createGrid);

function createGrid() {
  const rowsInput = document.querySelector("input[name=rows]");
  const columnsInput = document.querySelector("input[name=columns]");

  const rows = rowsInput.value;
  const columns = columnsInput.value;

  gridContainer.innerHTML = "";

  for (let r = 0; r < rows; r++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let c = 0; c < columns; c++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.backgroundColor = 'white';
      cell.addEventListener("click", handleCellClick);
      cell.addEventListener("mouseover", handleCellHover);

      row.appendChild(cell);
    }

    gridContainer.appendChild(row);
  }
}

function handleCellClick() {
  this.classList.toggle("filled");
  this.style.backgroundColor = colorPicker.value;
}

function handleCellHover(e) {
  if (e.buttons == 1) {
    this.classList.toggle("filled");
    this.style.backgroundColor = colorPicker.value;
  }
}