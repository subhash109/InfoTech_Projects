let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusDisplay = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

// Handle user click
function handleClick(event) {
  const index = event.target.dataset.index;

  if (board[index] !== "" || !gameActive) return;

  makeMove(index, currentPlayer);

  if (checkWinner(currentPlayer)) {
    statusDisplay.textContent = `${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== "")) {
    statusDisplay.textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.textContent = `${currentPlayer}'s turn`;
}

// Place move on board
function makeMove(index, player) {
  board[index] = player;
  cells[index].textContent = player;
  cells[index].classList.add(player); // Add class "X" or "O" for color styling
}

// Check win conditions
function checkWinner(player) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] === player && board[b] === player && board[c] === player;
  });
}

// Reset the game
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  statusDisplay.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("X", "O");
  });
}

// Event listeners
cells.forEach(cell => cell.addEventListener("click", handleClick));
statusDisplay.textContent = `${currentPlayer}'s turn`;
