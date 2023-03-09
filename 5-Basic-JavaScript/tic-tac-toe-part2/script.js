// your code here...
let turn = true;
let cells = document.getElementsByClassName("cell");
let gameStatus = document.querySelector("h2");
let restartButton = document.querySelector("button");
let filledCells = [];

function initial() {
    turn = true;
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
        filledCells[i] = "";
    }
    gameStatus.innerHTML = `It's X's turn`;
}

function toggleTurn(_turn) {
    return !turn;
}

function saveToFilledCells(_cell, _xoTurn) {
    let tmpIndex = parseInt(_cell.getAttribute("data-cell-index"));
    filledCells[tmpIndex] = _xoTurn;
}

function checkFilledCells(_cell) {
    let tmpIndex = parseInt(_cell.getAttribute("data-cell-index"));
    let result;

    if (filledCells[tmpIndex]) {
        result = false;
    }
    else {
        result = true;
    }

    return result;
}

function cellEventHandler(event) {
    let cell = event.currentTarget;

    if (checkFilledCells(cell)) {
        let xoTurn = turn ? "X" : "O";
        let xo = document.createTextNode(xoTurn);

        cell.innerHTML = "";
        cell.append(xo);

        saveToFilledCells(cell, xoTurn);

        turn = toggleTurn(turn);
        xoTurn = turn ? "X" : "O";

        gameStatus.innerHTML = `It's ${xoTurn}'s turn`;
    }
}

function restartEventHandler() {
    initial();
}

initial();
for (elem of cells) {
    elem.addEventListener("click", cellEventHandler);
}
restartButton.addEventListener("click", restartEventHandler);