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

