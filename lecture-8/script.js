let snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200},
]

let dx = 10;
let dy = 0;

//get the instance of the CANVAS element
const snakearea = document.getElementById("snakearea");

//return a 2D drawing context
const snakearea_context = snakearea.getContext("2d");

//main method
function main() {

    //create time out function
    setTimeout(function onTick() {
        clearArea()
        moveSnake()
        drawSnake()

        //repeat
        main()
    }, 100)

}

function drawSnake() {
    snake.forEach(drawSnakePart)
}

//callback function
//create a function that will draw the snake part
function drawSnakePart(snakePart) {
    //set color of the snake
    snakearea_context.fillStyle = 'blue'

    //draw a filled rectangle to represent the snake part at the corrdinates
    //the part is located
    snakearea_context.fillRect(snakePart.x, snakePart.y, 10, 10)
}

document.addEventListener("keydown", changeDirection)

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode
    if (keyPressed === LEFT_KEY) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed === UP_KEY) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === RIGHT_KEY) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY) {
        dx = 0;
        dy = 10;
    }
    console.log(event.keyCode)
}

function clearArea() {
    snakearea_context.fillStyle = "grey"

    //draw a FILLED rectangle to cover the entire canvas
    snakearea_context.fillRect(0, 0, snakearea.clientWidth, snakearea.clientHeight)
}



function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy}
    snake.unshift(head);
    snake.pop()
}

main();