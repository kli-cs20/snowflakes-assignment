// Bubbles Objects (Associative Arrays with Properties/key:value pairs)
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Create an array of random bubble objects
let bubbles = [];

requestAnimationFrame(draw);
function draw() {
    // Fill Canvas
    background("black");

    // Move and Draw Bubbles
    for (let i = 0; i < bubbles.length; i++) {
        moveBubble(bubbles[i]);
        drawBubble(bubbles[i]);
    }

    // loop draw function
    requestAnimationFrame(draw);
}

// EVENTS
document.addEventListener("keydown", keydownHandler);
document.addEventListener("mousemove", mousemoveHandler)


function keydownHandler(e) {
    if (e.keyCode === 39) {
        // Right Arrow Key adds new bubble
        // bubbles.push(newRandomBubble());
        bubbles.push(newBubble(400, 300, 30, randomRGB()));
    } else if (e.keyCode === 37) {
        // Left arrow key takes away bubble
        bubbles.pop();
    } else if (e.keyCode === 32) {
        // Space key creates bubble on mouse
        addBubble();
    }
}

// Mouse Varibles
let mouseX, mouseY;
function mousemoveHandler(e) {
    // Update mouseX and mouseY
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = e.x - cnvRect.x;
    mouseY = e.y - cnvRect.y;
}

// Timers
setInterval(addBubble, 1000); // Every second

