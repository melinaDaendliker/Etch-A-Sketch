const drawingSpace = document.querySelector('.drawing-space');
const colorPicker = document.querySelector('.colorPicker');
const colorPickerButton = document.querySelector('.colorPickerButton');
const eraser = document.querySelector('.erase');
const drawButton = document.querySelector('.draw')

// event listener for buttons
let mode = 'draw'

eraser.addEventListener('click', () => { mode = 'erase'});
drawButton.addEventListener('click', () => {mode = 'draw'});

// default values
let color = 'black';
let numPixels = 16; 
let size = 480 / numPixels;
createGrid(numPixels);
const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => pixel.addEventListener('mouseover', draw));




//const value = document.querySelector("#value");
//const input = document.querySelector("#pi_input");
//value.textContent = input.value;
//input.addEventListener("input", (event) => {
  //value.textContent = event.target.value;
  //let numPixels = event.target.value;
  //if (numPixels != 16) {
    //const lines = document.querySelectorAll('.line');
    //lines.forEach((line) => {line.remove(drawingSpace)
    //})
    //console.log(numPixels);
    //size = 480 / numPixels;
    //createGrid(numPixels);
  //}
//});





// grid size choice

// clear all choice
// rainbow random color choice



colorPicker.addEventListener("change", choseColor, false);









function createGrid (numPixels) {
  for (let i = 1; i <= numPixels ; i++) {
    let line = document.createElement('div');
    line.classList.add('line');
    line.setAttribute('style', `height: 480px; width: ${size}px`);
    drawingSpace.appendChild(line);
    
    for(let j = 1; j <= numPixels; j++) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.setAttribute('style', `height: ${size}px; width: ${size}px`);
      line.appendChild(pixel);} 
  }
}

function draw(e) {
  let pixel = e.target
  if (mode == 'draw') {
    coloring(pixel, color);
  } else if (mode == 'erase') {
    erase(pixel);
  
    
  }
  


  //if (erase button pressed) {
    //call erase function
  //} else if (color rainbow is pressed) {
    //call rainbow function
  //}
    //else call draw function default black if nothing else is chosen
  
}

function coloring(pixel, col=black) {
  pixel.setAttribute('style', `background-color: ${col}; height: ${size}px; width: ${size}px`);

}
function erase(pixel) {
  pixel.setAttribute('style', `background-color: white; height: ${size}px; width: ${size}px`);
}

function rainbow() {

}

function clear() {

}

function touch(){

}

function choseColor(e) {
  color = colorPicker.value
}
