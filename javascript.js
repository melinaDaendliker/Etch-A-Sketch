const drawingSpace = document.querySelector('.drawing-space')


let numPixels = 16;
let size = 480 / numPixels;

// grid size choice
// color choice
// erase choice 
// clear all choice
// rainbow random color choice
// touchscreen choice changes to computer once pressed 

createGrid(numPixels);
const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => pixel.addEventListener('mouseover', getPixel));









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

function getPixel(e) {
  let pixel = e.target;
  console.log(pixel);
 
  //if (erase button pressed) {
    //call erase function
  //} else if (color rainbow is presed) {
    //call rainbow function
  //}
    //else call draw function default black if nothing else is chosen
  
}

function draw(pixel, col='blue') {
  pixel.setAttribute('style', `background-color: ${col}; height: ${size}px; width: ${size}px`);

}
function erase(pixel) {
  pixel.setAttribute('style', `background-color: white; height: ${size}px; width: ${size}px`);


}

