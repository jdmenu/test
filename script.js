const tilesContainer = document.getElementById('tiles-container');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-button');
const countdownElement = document.getElementById('countdown');

let score = 0;
let timer;
let gameActive = false;

// 기존 코드...

function startGame() {
  createTiles();
  resetGame();
  countdown(3);
}

function countdown(seconds) {
  let count = seconds;
  const countdownElement = document.getElementById('countdown');
  countdownElement.textContent = count;
  countdownElement.classList.remove('hidden');

  const countdownInterval = setInterval(() => {
    if (count === 0) {
      clearInterval(countdownInterval);
      countdownElement.classList.add('hidden');
      changeRandomTileColor();
      startTileClickListener();
    } else {
      count--;
      countdownElement.textContent = count;
    }
  }, 1000);
}

// 기존 코드...


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
    scoreElement.textContent = `Score: ${score}`;
    changeRandomTileColor();
  }
}

function resetGame() {
  score = 0;
  scoreElement.textContent = 'Score: 0';
  clearInterval(timer);
  resetTilesColor();
  startButton.style.display = 'block';
  gameActive = false;
}

function createTiles() {
  for (let i = 0; i < 16; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.style.width = '80px';
    tile.style.height = '80px';
    tile.style.borderRadius = '8px';
    tile.style.cursor = 'pointer';
    tilesContainer.appendChild(tile);
  }
}

startButton.addEventListener('click', startGame);
