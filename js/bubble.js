// BUBBLE FUNCTIONS

function newBubble(initX, initY, initR, initColor) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor
    };
}

function newRandomBubble() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(5, 35),
        color: randomRGB()
    };
}

// Create and return an array with 'total' bubble objects
function createRandomBubbleArray(total) {
    // Create a temporary array so it doesn't rely on a global variable (bubbles)
    let temp = [];
    for (let n = 1; n <= total; n++) {
        temp.push(newRandomBubble());
    }
    return temp;
}

function drawBubble(aBubble) {
    stroke(aBubble.color);
    circle(aBubble.x, aBubble.y, aBubble.r, "stroke");
}

function moveBubble(aBubble) {
    aBubble.x += randomInt(-3, 4);
    aBubble.y += randomInt(-3, 4);
}

// Add bubble on mouse cursor coordinates
function addBubble() {
    bubbles.push(newBubble(mouseX, mouseY, 30, randomRGB()));
}
