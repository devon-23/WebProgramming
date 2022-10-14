const words = ['application', 'programming', 'interface', 'wizard'];
const correctLetters = [];
const wrongLetters = [];

// we needs to have a random word in context (from words array)
let selectedWord = words[Math.floor(Math.random() * words.length)]

window.addEventListener('keydown', e => {
    console.log(e.keyCode)
    // want to make sure we are in the range of A-Z
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;
        //check if the letter typed exists in "selectedWord"
        if(selectedWord.includes(letter)) {
            correctLetters.push(letter);
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
            }
        }
    }
})