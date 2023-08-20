
// Variables
var cursorPoint = document.querySelector(".cursor__point");
var cursorCircle = document.querySelector(".cursor__circle");
var width = window.innerWidth;
var height = window.innerHeight;
var target = {
    x: width / 2,
    y: height / 2
};
var position = {
    x: height,
    y: width
};
var BORDER_WIDTH = 2;
var DELAY_CURSOR = 0.1;

window.addEventListener("mousemove", function(event) {
    target.x = event.clientX;
    target.y = event.clientY -50;
});

// Funciones
function updateCursorPoint() {
    cursorPoint.style.left = target.x.toFixed() + "px";
    cursorPoint.style.top = target.y.toFixed() + "px";

    requestAnimationFrame(updateCursorPoint);
}

function updateCursorCircle() {
    var dx = target.x - position.x;
    var dy = target.y - position.y;
    var vx = dx * DELAY_CURSOR;
    var vy = dy * DELAY_CURSOR;

    position.x += vx;
    position.y += vy;

    cursorCircle.style.left = (position.x + BORDER_WIDTH - cursorCircle.offsetWidth / 2).toFixed() + "px";
    cursorCircle.style.top = (position.y + BORDER_WIDTH - cursorCircle.offsetHeight / 2).toFixed() + "px";

    requestAnimationFrame(updateCursorCircle);
}

// Init
updateCursorPoint();
updateCursorCircle();
