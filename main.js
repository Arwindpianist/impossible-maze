document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('container').classList.add('visible');
});

const flashlight = document.createElement('div');
flashlight.classList.add('flashlight');
document.body.appendChild(flashlight);

let mouseX = 0;
let mouseY = 0;
let flashlightX = 0;
let flashlightY = 0;
const easing = 1.0; // adjust this to control the speed of the effect

function moveFlashlight() {
    const distanceX = mouseX - flashlightX;
    const distanceY = mouseY - flashlightY;
    flashlightX += distanceX * easing;
    flashlightY += distanceY * easing;
    flashlight.style.left = flashlightX + 'px';
    flashlight.style.top = flashlightY + 'px';
    document.documentElement.style.setProperty('--cursorX', flashlightX + 'px');
    document.documentElement.style.setProperty('--cursorY', flashlightY + 'px');
    requestAnimationFrame(moveFlashlight);
}

document.addEventListener('mousemove', function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

document.addEventListener('touchmove', function (event) {
    mouseX = event.touches[0].clientX;
    mouseY = event.touches[0].clientY;
});

requestAnimationFrame(moveFlashlight);

document.addEventListener('mousemove', moveFlashlight);
document.addEventListener('touchmove', moveFlashlight);


// import * as PIXI from './node_modules/pixi.js';

// // Create a PixiJS application
// const app = new PIXI.Application({
//     backgroundColor: 0x000000,
//     autoResize: true,
//     resolution: window.devicePixelRatio,
// });

// // Add the canvas element to the DOM
// document.body.appendChild(app.view);

// // Create a container for the flashlight
// const flashlightContainer = new PIXI.Container();
// app.stage.addChild(flashlightContainer);

// // Create a graphics object to draw the flashlight
// const flashlight = new PIXI.Graphics();
// flashlight.beginFill(0xffffff, 1);
// flashlight.drawCircle(0, 0, 200);
// flashlight.endFill();
// flashlightContainer.addChild(flashlight);

// // Create a mask to reveal the background
// const mask = new PIXI.Graphics();
// mask.beginFill(0xffffff, 1);
// mask.drawRect(0, 0, app.renderer.width, app.renderer.height);
// mask.endFill();
// app.stage.addChild(mask);

// // Apply the mask to the flashlight container
// flashlightContainer.mask = mask;

// // Move the flashlight container to the center of the screen
// flashlightContainer.x = app.renderer.width / 2;
// flashlightContainer.y = app.renderer.height / 2;

// // Set up the mouse and touch event listeners
// let mouseX = 0;
// let mouseY = 0;
// document.addEventListener('mousemove', function (event) {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
// });

// document.addEventListener('touchmove', function (event) {
//     mouseX = event.touches[0].clientX;
//     mouseY = event.touches[0].clientY;
// });

// // Update the position of the flashlight and mask on each frame
// app.ticker.add(function () {
//     const x = mouseX - app.renderer.width / 2;
//     const y = mouseY - app.renderer.height / 2;
//     flashlightContainer.x += (x - flashlightContainer.x) * 0.1;
//     flashlightContainer.y += (y - flashlightContainer.y) * 0.1;
//     mask.clear();
//     mask.beginFill(0xffffff, 1);
//     mask.drawCircle(flashlightContainer.x, flashlightContainer.y, 200);
//     mask.endFill();
// });
