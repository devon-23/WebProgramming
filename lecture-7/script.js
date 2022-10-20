const calculatorDisplay = document.querySelector('h1')
const inputButtons = document.querySelectorAll('button')
const clearButton = document.getElementById('clear-button')
let awaitingNextValue = false;

//add event listeners for numbers... (for now)
inputButtons.forEach((inputButton) => {
    inputButton.addEventListener('click', () => {
        sendNumberValue(inputButton.value);
    })
});

clearButton.addEventListener('click', resetAll);

function resetAll() {
    calculatorDisplay.textContent = '0'
}

function sendNumberValue(number) {
    //replace current display value if fisrt value is entered
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false
    } else {
        //if the display value is 0, replace it, if not add number to display value
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = (displayValue === '0' ? number : displayValue + number);
    }
}