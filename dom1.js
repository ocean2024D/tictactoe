let container = document.createElement("div");
container.className = "container";
document.body.prepend(container);

let board = document.getElementsByClassName("board")[0];
let h1 = document.querySelector("h1");
let message = document.querySelector("p");
let btn = document.querySelector("button");

container.appendChild(h1);
container.appendChild(board);
container.appendChild(message);
container.appendChild(btn);

for (let i = 0; i < 9; i++) {
  let div = document.createElement("div");
  div.className = "cell";
  board.appendChild(div);
}

let cell = document.getElementsByClassName("cell");
let currentPlayer = "X";
let xWinCount = 0;
let oWinCount = 0;
let won = false;
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", function () {
    if (cell[i].innerText === "" && !won) {
      cell[i].innerText = currentPlayer;

      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }

      for (let j = 0; j < winCombinations.length; j++) {
        if (
          cell[winCombinations[j][0]].innerText === "X" &&
          cell[winCombinations[j][1]].innerText === "X" &&
          cell[winCombinations[j][2]].innerText === "X"
        ) {
          won = true;
          xWinCount += 1;
          document.getElementsByClassName("message")[0].innerText =
            "X won! Number of games X won: " + xWinCount;
          setTimeout(resetGame, 1800);
          return;
        } else if (
          cell[winCombinations[j][0]].innerText === "O" &&
          cell[winCombinations[j][1]].innerText === "O" &&
          cell[winCombinations[j][2]].innerText === "O"
        ) {
          won = true;
          oWinCount += 1;
          document.getElementsByClassName("message")[0].innerText =
            "O won! Number of games O won:" + oWinCount;
          setTimeout(resetGame, 1800);
          return;
        }
      }

      let isWon = true;
      for (let z = 0; z < cell.length; z++) {
        if (cell[z].innerText === "") {
          isWon = false;
          break;
        }
      }

      if (isWon) {
        document.getElementsByClassName("message")[0].innerText = "no one won!";
        setTimeout(resetGame, 1800);
      }
    }
  });
}

function resetGame() {
  for (let z = 0; z < cell.length; z++) {
    cell[z].innerHTML = "";
  }
  currentPlayer = "X";
  won = false;
  document.getElementsByClassName("message")[0].innerText =" ";
}
document.getElementsByClassName("restart")[0].addEventListener("click",resetGame)
