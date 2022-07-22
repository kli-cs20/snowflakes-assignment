// SNOWFLAKE FUNCTIONS

function newSnowflake(initX, initY, initR, initSpeedX, initSpeedY, initColor) {
    return {
        x: initX,
        y: initY,
        r: initR,
        speedX: initSpeedX,
        speedY: initSpeedY,
        color: initColor
    };
}

function newRandomSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(5, 10), 
        speedX: randomInt(-2, 1), // Assign unique speed 
        speedY: randomDec(2, 10), 
        color: "white"
    };
}

// Create and return an array with 'total' Snowflake objects
function createRandomSnowflakeArray(total) {
    // Create a temporary array so it doesn't rely on a global variable (snowflakes[])
    let temp = [];
    for (let n = 1; n <= total; n++) {
        temp.push(newRandomSnowflake());
    }
    return temp;
}

function drawSnowflake(aSnowflake) {
    fill(aSnowflake.color);
    circle(aSnowflake.x, aSnowflake.y, aSnowflake.r, "fill");
}

function moveSnowflake(aSnowflake) {
    aSnowflake.x += aSnowflake.speedX;
    aSnowflake.y += aSnowflake.speedY;
    if (aSnowflake.y > 600) {
        // Teleport to random location
        aSnowflake.y = 0;
        aSnowflake.x = randomInt(0, 800);
    }
}

// Add Snowflake on mouse cursor coordinates
function addSnowflake() {
    snowflakes.push(newSnowflake(mouseX, mouseY, randomInt(5, 10), randomInt(-2, 3), randomDec(2, 10), "white"));
}  
