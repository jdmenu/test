const tilesContainer = document.getElementById('tiles-container');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-button');
const countdownElement = document.getElementById('countdown');

let score = 0;
let timer;
let gameActive = false;

function startGame() {
  resetGame();
  startButton.style.display = 'none';
  gameActive = true;
  createTiles(); 
  countdown(3);
}

function countdown(seconds) {
  let count = seconds;
  countdownElement.textContent = count;

  const countdownInterval = setInterval(() => {
    if (count === 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = '';
      changeRandomTileColor();
      startTileClickListener();
    } else {
      count--;
      countdownElement.textContent = count;
    }
  }, 1000);
}

function createTiles() {
  for (let i = 0; i < 16; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tilesContainer.appendChild(tile);
  }
}

function changeRandomTileColor() {
  const tiles = document.querySelectorAll('.tile');
  const randomIndex = Math.floor(Math.random() * tiles.length);
  const randomTile = tiles[randomIndex];

  resetTilesColor();

  randomTile.style.backgroundColor = getRandomColor();
}

// (이하 생략)
