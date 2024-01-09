const tilesContainer = document.getElementById('tiles-container');
const startButton = document.getElementById('start-button');
const scoreElement = document.getElementById('score-value');
const popupContainer = document.getElementById('popup-container');
const popupScoreElement = document.getElementById('popup-score-value');

let score = 0;
let isGameActive = false;

function startGame() {
    score = 0;
    updateScore();
    isGameActive = true;
    startButton.disabled = true;

    countdown(3, () => {
        generateRandomTile();
        setTimeout(() => {
            isGameActive = false;
            startButton.disabled = false;
            showPopup();
        }, 15000);
    });
}

// ...

function countdown(seconds, callback) {
    let counter = seconds;
    const countdownInterval = setInterval(() => {
        if (counter > 0) {
            console.log(counter);
            // 숫자를 화면에 표시
            statusElement.innerText = counter;
            counter--;
        } else {
            clearInterval(countdownInterval);
            statusElement.innerText = "뱀파이어를 피해 생존하세요!";
            callback();
        }
    }, 1000);
}

function startGame() {
    score = 0;
    updateScore();
    isGameActive = true;
    startButton.disabled = true;

    countdown(3, () => {
        // 3초 후에 시작되면서 초기화
        clearTiles();
        generateRandomTile();

        setTimeout(() => {
            isGameActive = false;
            startButton.disabled = false;
            showPopup();
        }, 15000);
    });
}

// ...


function generateRandomTile() {
    clearTiles();
    const randomIndex = Math.floor(Math.random() * 16);
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.addEventListener('click', () => {
        if (isGameActive) {
            score++;
            updateScore();
            generateRandomTile();
        }
    });

    document.querySelectorAll('.tile')[randomIndex].appendChild(tile);
}

function clearTiles() {
    tilesContainer.innerHTML = '';
    for (let i = 0; i < 16; i++) {
        const tileContainer = document.createElement('div');
        tileContainer.classList.add('tile');
        tilesContainer.appendChild(tileContainer);
    }
}

function updateScore() {
    scoreElement.innerText = score;
}

function countdown(seconds, callback) {
    let counter = seconds;
    const countdownInterval = setInterval(() => {
        if (counter > 0) {
            console.log(counter);
            counter--;
        } else {
            clearInterval(countdownInterval);
            callback();
        }
    }, 1000);
}

function showPopup() {
    popupScoreElement.innerText = score;
    popupContainer.classList.remove('hidden');
}

popupContainer.addEventListener('click', () => {
    popupContainer.classList.add('hidden');
});

// 초기화
clearTiles();
