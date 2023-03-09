// your code here...
let turn = "X";
let cells = document.getElementsByClassName("cell");
let gameStatus = document.querySelector("h2");
let restartButton = document.querySelector("button");

function toggleTurn(_turn) {
    let result;

    if (_turn == "X") {
        result = "O";
    }
    else if (_turn == "O") {
        result = "X";
    }

    return result;
}

function writePlayerTurn() {
    gameStatus.innerHTML = `It's ${turn}'s turn`;
}

function cellEventHandler(event) {
    let xo = document.createTextNode(turn);
    let cell = event.currentTarget;

    cell.innerHTML = "";

    turn = toggleTurn(turn);

    cell.append(xo);

    writePlayerTurn();
}

function restart() {
    turn = "X";
    for (elem of cells) {
        elem.innerHTML = "";
    }

    writePlayerTurn();
}

function gameTurn() {
    gameStatus.innerHTML = `It's ${turn}'s turn`;
}

for (elem of cells) {
    elem.addEventListener("click", cellEventHandler);
}
restartButton.addEventListener("click", restart);

writePlayerTurn();


/*let turn = true;
let cells = document.getElementsByClassName("cell");
let gameStatus = document.querySelector("h2");
let restartButton = document.querySelector("button");

function initial() {
    turn = true;
    for (elem of cells) {
        elem.innerHTML = "";
    }
    gameStatus.innerHTML = `It's X's turn`;
}

function cellEventHandler(event) {
    let cell = event.currentTarget;
    cell.innerHTML = "";
    let xoTurn = turn ? "X" : "O";
    let xo = document.createTextNode(xoTurn);
    cell.append(xo);
    turn = !turn;
    xoTurn = turn ? "X" : "O";
    gameStatus.innerHTML = `It's ${xoTurn}'s turn`;
}

function restartEventHandler() {
    initial();
}

initial();
for (elem of cells) {
    elem.addEventListener("click", cellEventHandler);
}
restartButton.addEventListener("click", restartEventHandler);*/