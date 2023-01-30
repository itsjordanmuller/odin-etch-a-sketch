const container = document.querySelector(".grid-container");

function createGrid(size) {
  container.style.setProperty("--grid-rows", size);
  container.style.setProperty("--grid-cols", size);
  for (let i = 0; i < (size * size); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

createGrid(16);