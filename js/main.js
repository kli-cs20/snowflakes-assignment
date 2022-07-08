// Snowflake Objects with Associative Arrays
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Create an array of random Snowflake objects
let snowflakes = createRandomSnowflakeArray(5);

requestAnimationFrame(draw);
function draw() {
    // Fill Canvas
    background("black");

    // Move and Draw snowflakes
    for (let i = 0; i < snowflakes.length; i++) {
        moveSnowflake(snowflakes[i]);
        drawSnowflake(snowflakes[i]);
    }

    // loop draw function
    requestAnimationFrame(draw);
}

// EVENTS
document.addEventListener("keydown", keydownHandler);
document.addEventListener("mousemove", mousemoveHandler)


function keydownHandler(e) {
    if (e.keyCode === 39) {
        // Right Arrow Key adds new Snowflake
        snowflakes.push(newRandomSnowflake());
    } else if (e.keyCode === 37) {
        // Left arrow key takes away Snowflake
        snowflakes.pop();
    } else if (e.keyCode === 32) {
        // Space key creates Snowflake on mouse cursor
        addSnowflake();
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


