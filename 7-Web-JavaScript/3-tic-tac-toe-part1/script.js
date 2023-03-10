let playerTurn = 'X';
const statusElement = document.querySelector(".game--status");
updateMessage(playerTurn);

document.querySelector(".game--container").addEventListener("click", e => {
    const target = e.target;
    if (target.innerText !== "")
        return;
    target.innerText = playerTurn;
    playerTurn = toggle(playerTurn);
    updateMessage(playerTurn);
})

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
function updateMessage(playerTurn) {
    statusElement.innerText = playerTurn === 'X' ? "It's X's turn" : "It's O's turn";
}
