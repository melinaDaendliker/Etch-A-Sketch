const drawingSpace = document.querySelector('.drawing-space');
const colorPicker = document.querySelector('.colorPicker');
const colorPickerButton = document.querySelector('.colorPickerButton');
const eraser = document.querySelector('.erase');
const drawButton = document.querySelector('.draw');
const clearButton = document.querySelector('.clear');
const rainbowButton = document.querySelector('.rainbow');
const touchButton = document.querySelector('.touch');
const value = document.querySelector("#value");
const input = document.querySelector("#size");

// default values
let isDrawing = false;
let color = 'black';
let mode = 'draw'
let numPixels = 16; 
let size = 480 / numPixels;
value.textContent = input.value;
createGrid(numPixels);
let pixels = document.querySelectorAll('.pixel');

// event listener for buttons
eraser.addEventListener('click', () => { mode = 'erase'});
drawButton.addEventListener('click', () => {mode = 'draw'});
rainbowButton.addEventListener('click', () => {mode = 'rainbow'})
colorPicker.addEventListener('change', choseColor, false);
clearButton.addEventListener('click', (e) => {clear(pixels)});
input.addEventListener('change', (e) => {changeGridSize(e); console.log('test')});

// event listener for drawing 
pixels.forEach(pixel => pixel.addEventListener(`mousemove`, draw));

// functions 

function changeGridSize (event) {
    value.textContent = event.target.value;
    let numPixels = event.target.value;
    console.log(numPixels);
    
    const lines = document.querySelectorAll('.line');
    lines.forEach((line) => {line.remove(drawingSpace)
    })
    size = 480 / numPixels;
    createGrid(numPixels);
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.addEventListener(`mouseover`, draw));
}

function startDrawing(e) {
  isDrawing = true;
  draw(e);
}

function stopDrawing() {
  isDrawing = false;
}

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

function choseColor(e) {
  color = colorPicker.value
}
