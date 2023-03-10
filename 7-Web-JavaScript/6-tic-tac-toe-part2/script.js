let playerTurn;
let cells;
restart();

document.querySelector(".game--container").addEventListener("click", e => {
    const target = e.target;
    const index = target.getAttribute("data-cell-index");
    if (!isCellEmpty(index))
        return;
    target.innerText = playerTurn;
    cells[index] = playerTurn;

    playerTurn = toggle(playerTurn);
    updateStatus(playerTurn);
});

document.querySelector(".game--restart").addEventListener("click", restart);

function restart() {
    playerTurn = "X";
    clearCells();
    updateStatus(playerTurn);
}

function clearCells() {
    cells = Array(9).fill("");
    console.debug(cells)
    document.querySelectorAll(".cell")
        .forEach((cell, index) => cell.innerText = cells[index]);
}

/**
 * @param {number} index
 */
function isCellEmpty(index) {
    return cells[index] === "";
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
    statusElement.innerText = playerTurn === 'X' ? "It's X's turn" : "It's O's turn";
}
