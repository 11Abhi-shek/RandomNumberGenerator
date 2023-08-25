let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
let remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");



let prevGuess = [];
let numGuess = 1;
let i=1;
let playGame = true//no need 
const mapsForNumber = new Map();
// if is a conditional statement not a function . It will not run after execution 
if (playGame) {

    // directly addEventListener laga skta tha 
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        p.innerHTML = ``
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    }
    else if (guess < 1) {
        alert("Please enter a  number greater than 1")
    }
    else if (guess > 100) {
        alert("Please enter a  number less than 100")
    }
    else {
        
        // if(mapsForNumber.hasValue(guess) == true)
        if(hasValue(mapsForNumber,guess))
        {
            console.log("duplicate found")
            alert("Don't insert duplicate values");
        }
        else
        {
            console.log("hi working")
            mapsForNumber.set(i,guess);
            prevGuess.push(guess)
            i++;
           // alert("Don't insert duplicate values");
           if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
        }
        
        
        
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if (randomNumber > guess) {
        displayMessage(`Number is Too low`)
    }
    else if (randomNumber < guess) {
        displayMessage(`Number is Too high`)
    }
}
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess},`
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}



// ...........................................no need......................................................

// function newGame() {
//     const newGameButton = document.querySelector('#newGame')
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = []
//     newGame = 1
//     guessSlot.innerHTML = ''
//     remaining.innerHTML = `${11 - numGuess}`;
//     userInput.disabled = false;
//     startOver.removeChild(p)
//     playGame = true  
//     
// }

function endGame() {
    prevGuess = [];
    // remaining = 11;
    userInput.value = ''
    numGuess = 1;
    guessSlot.innerHTML = ''
    // userInput.disabled = true;
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`
    startOver.appendChild(p)
    randomNumber = parseInt(Math.random() * 100 + 1);
    // playGame = false   
    //newGame();
}


function hasValue(map, searchValue) {
    let found = false;
    map.forEach((value) => {
      if (value === searchValue) {
        found = true;
      }
    });
    return found;
  }