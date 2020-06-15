const container = document.getElementById("container");

// grid creation
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', gridFunction);
    function gridFunction(){
      cell.style.backgroundColor = 'red';
    }
  }

  }
makeRows(16, 16);
//resetting the grid
let gridButton = document.getElementById('gridButton');
let button = document.getElementById('resetButton');
button.addEventListener("click", makeNew);
function makeNew(){
    while(container.lastChild){
    container.removeChild(container.lastChild);
    }
   let rows = prompt('What dimensions would you like?');
   if(isNaN(rows)){
       alert('Enter a Number!')
    return makeRows(16,16);}
makeRows(rows, rows);
   }
