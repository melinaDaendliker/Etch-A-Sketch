const drawingSpace = document.querySelector('.drawing-space');
const colorPicker = document.querySelector('.colorPicker');
const colorPickerButton = document.querySelector('.colorPickerButton');

let color = 'black'



let numPixels = 8;
let size = 480 / numPixels;

// grid size choice
// erase choice 
// back to color mode 
// clear all choice
// rainbow random color choice
// touchscreen choice changes to computer once pressed 

createGrid(numPixels);
let isMouseDown = false;
const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel) => {
  //console.log(pixel)
  pixel.addEventListener('mousedown', () => {
      isMouseDown = true;
      console.log(isMouseDown);
  });

  pixel.addEventListener('mouseup', () => {
    isMouseDown = false;
    console.log(isMouseDown);
});
  pixel.addEventListener('mousemove', (e) => {
    if (isMouseDown) {
      let drawPixel = e.target;
      draw(drawPixel);
      //draw();
    }
});
}); 


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

function draw(pixel) {
  

  coloring(pixel, color);
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
