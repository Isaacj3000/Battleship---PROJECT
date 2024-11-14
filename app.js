// *-------------------------------- Constants --------------------------------*
/* Define game-specific constants here */

// *---------------------------- Variables (state) ----------------------------*
/* Declare state variables to track game status */
let board;
let winner;
let squareIndex;


// *------------------------ Cached Element References ------------------------*
/* Cache DOM elements for efficient access */
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const boardContainer = document.querySelector('.board');
// *-------------------------------- Functions --------------------------------*/
function init() {
    board = Array(15).fill("")
    winner = false 
    // Initialize game state and set up initial conditions
}

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


function handleClick(event) {
    console.log('You sunk my battleship.')
    // Process user input or other events
    // checkForWinner()
    // render();
  init() 

}

function updateBoard() {
    // Modify game board in response to events or game logic
    board.forEach((mark, index) => {
        const square = squareEls[index];  
        square.textContent = mark      
    });
}
function checkWinCondition() {
    // Determine if a win or loss condition has been met
}

function resetGame() {
    // Reset the game to its initial state
}

// *----------------------------- Event Listeners -----------------------------*
/* Attach event listeners to handle user interactions */
const ships = document.querySelectorAll(".ship")
ships.forEach(ship => {
    ship.addEventListener('click', handleClick)
}
)
 squareEls.forEach(square => {
     square.addEventListener('click', function(){
         console.log(square)
     }) 
  })    
//  sqrares.addEventListener('click', handleClick)
// Initialize the game when the script loads
init();