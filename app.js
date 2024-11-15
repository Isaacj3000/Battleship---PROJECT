// *-------------------------------- Constants --------------------------------*
/* Define game-specific constants here */
const battleshipNames = [
    "Stormbringer" ,"SeaFury", "Ironclad", "AbyssalQueen","TitanWrath",
    "Stormbringer","SeaFury","Ironclad", "AbyssalQueen","TitanWrath",
    "VengefulWarden","SeaSerpent","BlackLeviathan", "RogueWave", "EmberRequiem",
    "VengefulWarden","SeaSerpent","BlackLeviathan", "RogueWave", "EmberRequiem",
  ];
  
// *---------------------------- Variables (state) ----------------------------*
/* Declare state variables to track game status */
let board;
let winner;
let squareIndex;
let turn;
let gameScoreP1;
let gameScoreP2;
let tie
let matchScoreP1;
let matchScoreP2;
let firstGuess;
let secondGuess;
let matches;
// *------------------------ Cached Element References ------------------------*
/* Cache DOM elements for efficient access */
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const boardContainer = document.querySelector('.board');
const player1Count = document.getElementById("player1-count");
const player2Count = document.getElementById("player2-count");
const resetBtnEl = document.querySelector(".button-container");
// *-------------------------------- Functions --------------------------------*/
function init() {
    board = shuffleBattleships([...battleshipNames]) 
    turn = " Player 1";
    winner = false;
    matches = 0 
    matchScoreP1 = 0
    matchScoreP2 = 0
    firstGuess = null
    secondGuess = null
    tie = false


    player1Count.innerText = 0
    player2Count.innerText = 0

    squareEls.forEach((sqr, index) => {
        sqr.className = "sqr";
        sqr.dataset.character = board[index]
    })
    // Initialize game state and set up initial conditions
    updateMessage();
}
init();
function render() {
    updateBoard();
    updateMessage();
    // Update the game's visual representation based on the current state
}

function generateRandom() {
    return Math.random() < 0.7 ? 1 : 0;
    let result = generateRandom();
 console.log(result); // This will log either 0 or 1, with 70% chance of being 1.

}
function shuffleBattleships(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

function handleClick(event) {
  const cell = event.target 
  console.log(cell.dataset.character)
  if (!cell.classList.contains('sqr')) return
  if (cell.classList.contains('matched') || cell === firstGuess) return 
   cell.classList.add(cell.dataset.character)
  if (!firstGuess) {
    firstGuess = cell 

  } else {
    secondGuess = cell
    checkForMatch();
  }
}

function updateBoard() {
    // Modify game board in response to events or game logic
    board.forEach((mark, index) => {
        const square = squareEls[index];  
        square.textContent = mark      
    });
}
function switchTurn() {
    if (!winner) {
        turn = turn === "Player 1" ? "Player 2" : "Player 1";
    }
 }

function updateMessage() {
    // Update message depending on game state
    if (winner) {
        messageEl.textContent = `You win! You matched all ships.`;
    } else {
        messageEl.textContent = `${turn}'s Turn.  `;
    }
    player1Count.innerText = matchScoreP1
    player2Count.innerText = matchScoreP2
}
function checkForMatch() {
    if (!firstGuess || !secondGuess) return
    if (firstGuess.dataset.character === secondGuess.dataset.character) {
        firstGuess.classList.add('matched')
        secondGuess.classList.add('matched')
        matches++
        if (turn === 'Player 1') {
            matchScoreP1++
        } else { 
            matchScoreP2++

        }
        checkForWinner()
        resetGuesses()
    } else {
        setTimeout(() => {
            firstGuess.classList.remove(firstGuess.dataset.character)
            secondGuess.classList.remove(secondGuess.dataset.character)
            resetGuesses();
            switchTurn()
        },500)
    }
   updateMessage() 
}
function resetGuesses() {
    firstGuess = null
    secondGuess = null
}
function checkForWinner() {
    if (matches === battleshipNames.length / 2) {
        if (matchScoreP1 === matchScoreP2) {
            tie = true
        } else { 
            winner = matchScoreP1 > matchScoreP2 ? 'Player 1'  : 'Player 2'
            tie = false 
        }
    } 
    
    updateMessage()
    // Determine if a win or loss condition has been met
}

function resetGame() {
    // Reset the game to its initial state
}
function playMusic() {
    let audio = new audio("poc.mp3");
        audio.play()
     play.addEventListener("click", playMusic);
}
window.onload = function() {
    const messageEl = document.getElementById('message');
    messageEl.textContent = " The player who matches the most ships wins.";

}

// *----------------------------- Event Listeners -----------------------------*
/* Attach event listeners to handle user interactions */
squareEls.forEach(sqr => {
    sqr.addEventListener("click", handleClick)
})
resetBtnEl.addEventListener("click", init)