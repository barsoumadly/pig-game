// Main Variables
let min = 1;
let max = 6;
let dice1 = 0;
let dice2 = 0;
let activePlayer = 0;
let current0 = 0;
let current1 = 0;
let score0 = 0;
let score1 = 0;
let finalResult = 0;
let name1 = localStorage.getItem("name1");
let name2 = localStorage.getItem("name2");

// Initial Function
function initial() {
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.winner-player').style.display = 'none';
    document.querySelector('#name-0').textContent = name1;
    document.querySelector('#name-1').textContent = name2;
}

initial();

// Winner Function
function winnerFunction() {
    document.querySelector('#name-0').style.display = 'none';
    document.querySelector('#score-0').style.display = 'none';
    document.querySelector('#name-1').style.display = 'none';
    document.querySelector('#score-1').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.enter-score').style.display = 'none';
    document.querySelector('.player0-current-box').style.display = 'none';
    document.querySelector('.player1-current-box').style.display = 'none';
    document.querySelector('.winner-player').style.display = 'block';
    document.querySelector('.wrapper').classList.add('winner');
}

// Change Active Players
function switchPlayers() {
    if (activePlayer === 0) {
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        current0 = 0;
        activePlayer = 1;
    } else {
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('#current-1').textContent = '0';
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        current1 = 0;
        activePlayer = 0;
    }
}

// Check Winner Player
function checkWinner() {
    if (activePlayer === 0 && score0 >= finalResult) {
        winnerFunction();
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.winner-player').textContent = name1 + ' Wins';
    } else if (activePlayer === 1 && score1 >= finalResult) {
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.winner-player').textContent = name2 + ' Wins';
        winnerFunction();
    } else {
        switchPlayers()
    }
}

// Roll Dice Button
document.querySelector('.btn-roll').addEventListener('click', function () {
    // First Dice
    let changeDice1 = document.querySelector('.dice1');
    dice1 = Math.floor(Math.random() * (max - min + 1)) + min;
    changeDice1.style.display = 'block';
    changeDice1.src = 'images/dice-red/dice-' + dice1 + '.png';
    // Second Dice
    let changeDice2 = document.querySelector('.dice2');
    dice2 = Math.floor(Math.random() * (max - min + 1)) + min;
    changeDice2.style.display = 'block';
    changeDice2.src = 'images/dice-black/dice-' + dice2 + '.png';
    // Switch Players
    if (dice1 === 1 || dice2 === 1) {
        switchPlayers()
    } else {
        if (activePlayer === 0) {
            current0 = current0 + dice1 + dice2;
            document.querySelector('#current-0').textContent = current0;
        } else {
            current1 = current1 + dice1 + dice2;
            document.querySelector('#current-1').textContent = current1;
        }
    }
});

// Hold Button
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (activePlayer === 0) {
        score0 += current0;
        document.querySelector('#score-0').textContent = score0;
        checkWinner()
    } else {
        score1 += current1;
        document.querySelector('#score-1').textContent = score1;
        checkWinner()
    }
});

// New Game Button
document.querySelector('.btn-reset').addEventListener('click', function () {
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.player0-current-box').style.display = 'block';
    document.querySelector('.player1-current-box').style.display = 'block';
    document.querySelector('#name-0').style.display = 'block';
    document.querySelector('#score-0').style.display = 'block';
    document.querySelector('#name-1').style.display = 'block';
    document.querySelector('#score-1').style.display = 'block';
    document.querySelector('.enter-score').style.display = 'block';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.wrapper').classList.remove('winner');
    document.querySelector('#name-0').textContent = name1;
    document.querySelector('#name-1').textContent = name2;
    document.querySelector('.enter-score').value = '';
    current0 = 0;
    current1 = 0;
    score0 = 0;
    score1 = 0;
    finalResult = 0;
    initial();
});

// New Game Button
document.querySelector('.btn-new').addEventListener('click', function () {
    document.location.href = "./game-start.html";
});

// Input Final Result
document.querySelector('.enter-score').addEventListener('keyup', function () {
    finalResult = document.querySelector('.enter-score').value;
});
