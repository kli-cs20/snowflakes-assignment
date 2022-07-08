// SNOWFLAKE FUNCTIONS

function newSnowflake(initX, initY, initR, initColor) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor
    };
}

function newRandomSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(5, 35),
        color: randomRGB()
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
    stroke(aSnowflake.color);
    circle(aSnowflake.x, aSnowflake.y, aSnowflake.r, "stroke");
}

function moveSnowflake(aSnowflake) {
    aSnowflake.x += randomInt(-3, 4);
    aSnowflake.y += randomInt(-3, 4);
}

// Add Snowflake on mouse cursor coordinates
function addSnowflake() {
    snowflakes.push(newSnowflake(mouseX, mouseY, 30, randomRGB()));
}
