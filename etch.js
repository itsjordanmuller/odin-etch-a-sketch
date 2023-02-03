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
  }
}
