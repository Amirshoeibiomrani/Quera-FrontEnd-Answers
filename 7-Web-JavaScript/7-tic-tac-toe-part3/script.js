let playerTurn;
let cells;
let winner;
restart();

document.querySelector(".game--container").addEventListener("click", e => {
    const target = e.target;
    const index = target.getAttribute("data-cell-index");
    if (winner || !isEmptyCell(cells[index]))
        return;
    target.innerText = playerTurn;
    cells[index] = playerTurn;

    winner = calculateWinner(cells);
    if (!winner)
        playerTurn = toggle(playerTurn);
    updateStatus(playerTurn);
});

document.querySelector(".game--restart").addEventListener("click", restart);

function restart() {
    playerTurn = "X";
    winner = null;
    clearCells();
    updateStatus(playerTurn);
}

function clearCells() {
    cells = Array(9).fill("");
    document.querySelectorAll(".cell")
        .forEach((cell, index) => cell.innerText = cells[index]);
}

/**
 * @param {string} cell
 */
function isEmptyCell(cell) {
    return cell === "";
}

/**
 * @param {string} playerTurn
 * @return {string}
 */
function toggle(playerTurn) {
    return playerTurn === 'X' ? 'O' : 'X';
}

/**
 * @param {string} playerTurn
 */
function updateStatus(playerTurn) {
    const statusElement = document.querySelector(".game--status");
    statusElement.innerText = winner
        ? `Player ${winner} has won`
        : areCellsCompleted(cells)
            ? "Game ended in a draw"
            : playerTurn === 'X' ? "It's X's turn" : "It's O's turn";
}

/**
 * @param {string[]} cells
 */
function areCellsCompleted(cells) {
    return !cells.some(cell => isEmptyCell(cell))
}

/**
 * @param {string[]} cells
 * @return {string | null}
 */
function calculateWinner(cells) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
        }
    }
    return null;
}
