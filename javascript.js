const drawingSpace = document.querySelector('.drawing-space');
const colorPicker = document.querySelector('.colorPicker');
const colorPickerButton = document.querySelector('.colorPickerButton');
const eraser = document.querySelector('.erase');
const drawButton = document.querySelector('.draw');
const clearButton = document.querySelector('.clear');
const rainbowButton = document.querySelector('.rainbow');


// default values
let color = 'black';
let mode = 'draw'
let numPixels = 16; 
let size = 480 / numPixels;
createGrid(numPixels);
const pixels = document.querySelectorAll('.pixel');

// event listener for buttons
eraser.addEventListener('click', () => { mode = 'erase'});
drawButton.addEventListener('click', () => {mode = 'draw'});
rainbowButton.addEventListener('click', () => {mode = 'rainbow'})
colorPicker.addEventListener('change', choseColor, false);
clearButton.addEventListener('click', (e) => {clear(pixels)});

// event listener for drawing 
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
// touch scree function 
// rainbow random color choice



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
  } else if (mode == 'rainbow') {
    rainbow(pixel);
  }
}

function coloring(pixel, col=black) {
  pixel.setAttribute('style', `background-color: ${col}; height: ${size}px; width: ${size}px`);

}
function erase(pixel) {
  pixel.setAttribute('style', `background-color: white; height: ${size}px; width: ${size}px`);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function rainbow(pixel) {
  let color = getRandomColor();
  pixel.setAttribute('style', `background-color: ${color}; height: ${size}px; width: ${size}px`);

  


}

function clear(pixels) {
  pixels.forEach((pixel) => pixel.setAttribute('style', `background-color: white; height: ${size}px; width: ${size}px`));
}

function touch(){

}

function choseColor(e) {
  color = colorPicker.value
}
