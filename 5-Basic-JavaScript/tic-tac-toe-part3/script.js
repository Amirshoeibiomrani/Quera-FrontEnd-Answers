// your code here...
let turn = true;
let cells = document.getElementsByClassName("cell");
let gameStatus = document.querySelector("h2");
let restartButton = document.querySelector("button");
let filledCells = [];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function initial() {
    turn = true;
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
        filledCells[i] = "";
    }
    gameStatus.innerHTML = `It's X's turn`;
}

function addEventListeners() {
    for (elem of cells) {
        elem.addEventListener("click", cellEventHandler);
    }
    restartButton.addEventListener("click", restartEventHandler);
}

function toggleTurn(_turn) {
    return !_turn;
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

function checkForWinner(_xoTurn) {
    let wonFlag = false;
    let isCellsFull = true;
    let isGameEnded = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winningCondition = winningConditions[i];
        let a = filledCells[winningCondition[0]];
        let b = filledCells[winningCondition[1]];
        let c = filledCells[winningCondition[2]];
        if (a == "" || b == "" || c == "") {
            isCellsFull = false;
            continue;
        }
        else if (a == b && b == c) {
            wonFlag = true;
            break;
        }
    }

    if (wonFlag) {
        gameStatus.innerHTML = `Player ${_xoTurn} has won`;
        for (elem of cells) {
            elem.removeEventListener("click", cellEventHandler);
        }
        isGameEnded = true;
    }
    else if (!wonFlag && isCellsFull) {
        gameStatus.innerHTML = "Game ended in a draw";
        for (elem of cells) {
            elem.removeEventListener("click", cellEventHandler);
        }
        isGameEnded = true;
    }

    return isGameEnded;
}

function cellEventHandler(event) {
    let cell = event.currentTarget;

    if (checkFilledCells(cell)) {
        let xoTurn = turn ? "X" : "O";
        let xo = document.createTextNode(xoTurn);

        cell.innerHTML = "";
        cell.append(xo);

        saveToFilledCells(cell, xoTurn);

        let isGameEnded = checkForWinner(xoTurn);

        if (!isGameEnded) {
            turn = toggleTurn(turn);
            xoTurn = turn ? "X" : "O";

            gameStatus.innerHTML = `It's ${xoTurn}'s turn`;
        }
    }
}

function restartEventHandler() {
    initial();
    for (elem of cells) {
        elem.addEventListener("click", cellEventHandler);
    }
}

initial();

addEventListeners();