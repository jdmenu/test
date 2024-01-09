const tilesContainer = document.getElementById('tiles-container');
const remainingTimeElement = document.getElementById('remaining-time');
const startButton = document.getElementById('start-button');
const countdownElement = document.getElementById('countdown');

let score = 0;
let timer;
let gameActive = false;

function startGame() {
  createTiles();
  resetGame();
  countdown(3);
}

function createTiles() {
  for (let i = 0; i < 16; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.style.width = '80px';
    tile.style.height = '80px';
    tile.style.borderRadius = '20px';
    tile.style.cursor = 'pointer';
    tilesContainer.appendChild(tile);
  }
}

function countdown(seconds) {
  let count = seconds;
  countdownElement.textContent = count;
  countdownElement.classList.remove('hidden');

  const countdownInterval = setInterval(() => {
    if (count === 0) {
      clearInterval(countdownInterval);
      countdownElement.classList.add('hidden');
      changeRandomTileColor();
      startTileClickListener();
      updateRemainingTime();
    } else {
      count--;
      countdownElement.textContent = count;
    }
  }, 1000);
}

function changeRandomTileColor() {
  const tiles = document.querySelectorAll('.tile');
  const randomIndex = Math.floor(Math.random() * tiles.length);
  const randomTile = tiles[randomIndex];

  resetTilesColor();

  randomTile.style.backgroundColor = getRandomColor();
}

function resetTilesColor() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile => {
    tile.style.backgroundColor = '#e0e0e0';
  });
}

function getRandomColor() {
  const colors = ['#ffcccb', '#add8e6', '#98fb98', '#ffc0cb', '#dda0dd', '#f0e68c', '#87cefa', '#afeeee'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function startTileClickListener() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile => {
    tile.addEventListener('click', handleTileClick);
  });
}

function handleTileClick(event) {
  if (gameActive) {
    score++;
    updateRemainingTime();
    changeRandomTileColor();
  }
}

function updateRemainingTime() {
  remainingTimeElement.textContent = '15';
}

function resetGame() {
  score = 0;
  clearInterval(timer);
  resetTilesColor();
  gameActive = false;
}

startButton.addEventListener('click', startGame);
