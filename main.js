let plays = ["", "", "", "", "", "", "", "", ""];
let player = "X";

const victory = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

innit();

function draw() {
  let fullBoard = "";

  for (const index in plays) {
    fullBoard += ` 
   <button onClick="selectPosition(${index})">${plays[index]}</button>
   `;
  }
  document.getElementById("board").innerHTML = fullBoard;
}

function togglePlayer() {
  if (player == "X") {
    player = "O";
  } else {
    player = "X";
  }
}

function validateVictory() {
  // player(jogador atual) - plays(todas as jogadas) - victory(combinaçoes de vitoria)
  let playerSelections = [];

  // Seleciona as jogadas do jogador atual
  for (const index in plays) {
    if (plays[index] == player) {
      playerSelections.push(index);
    }
  }

  // Percorre a lista de combinação de vitoria
  for (const indexVictory in victory) {
    const victoryRow = victory[indexVictory];
    const win = 3;
    let winPlayer = 0;

    for(const indexVictoryRow in victoryRow) {
      const victoryCol = victoryRow[indexVictoryRow];

      if (playerSelections.includes(victoryRow[indexVictoryRow])) {
        // winPlayer = winPlayer + 1
        winPlayer++;
      }
    }
    if(win == winPlayer) {
      alert(`Jogador ${player} venceu!!!`);
      return;
    }
  }
}

function innit() {
  draw();
}

function selectPosition(position) {
  if (canSelectPosition(position)) {
    plays[position] = player;
    draw();
    validateVictory();
    togglePlayer();
  }
}

//verifica se pode selecionar a posiçào , se ela esta vazia...
function canSelectPosition(position) {
  //verifico se a posicão é uma string vazia!
  if (plays[position].trim() == "") {
    //retorno verdadeiro, para continuar com o fluxo
    return true;
  }
  //retorno false e nao termina o fluxo
  alert("Posição já selecionada");
  return false;
}
