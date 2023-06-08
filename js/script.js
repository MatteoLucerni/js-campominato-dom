console.log('JS OK');

// prendo gli elementi dal DOM
const buttonPlay = document.getElementById('button-play');
const grid = document.getElementById('grid');
const difficulty = document.getElementById('difficulty');
const scoreTarget = document.getElementById('score-box');

const maxBombs = 16;
let isEnd = false;

// Creo la cella
const createCell = () => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
};

// Genero un numero casuale da min a max inclusi

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

// Creo termina partita

const endGame = (hasHitBomb, maxNumber, score) => {
    const allCells = grid.querySelectorAll('.cell');
    for(let i = 0; i < maxNumber; i++){
        if(allCells[i].classList.contains('isBomb')){
            allCells[i].classList.add('bomb');
        }
    }
    const message = hasHitBomb ? 'You lost!' : 'You won!';

    console.log(message + ' Score: ' + score);
    isEnd = true;
};

// Genero le bombe

const createBombs = maxNumber => {
    const bombs = [];
    while (bombs.length < maxBombs){
        let randomNumber = getRandomNumber(1, maxNumber);
        if(bombs.includes(randomNumber)){
            randomNumber = getRandomNumber(1, maxNumber);
        } else{
            bombs.push(randomNumber);
        }
    }
    return bombs;
}

buttonPlay.addEventListener('click', function(){
    // reset griglia, score e isEnd
    isEnd = false;
    grid.innerHTML = '';
    let score = 0;
    scoreTarget.innerText = score;

    // parametri per la griglia
    let rows = 10;
    let cols = 10;

    // calcolo difficoltà
    const mode = parseInt(difficulty.value);
    if(mode === 2){
        rows = 9;
        cols = 9;
    } else if(mode === 3){
        rows = 7;
        cols = 7;
    }

    const cellsNumber = rows * cols
    console.log('Max cells: ' + cellsNumber);
    console.log(rows + 'x' + cols);

    // calcolo lo score massimo
    const maxScore = cellsNumber - maxBombs;
    console.log('Score to win: ' + maxScore);

    // genero la lista di bombe
    const bombs = createBombs(cellsNumber);
    console.log(bombs);

    // creo il ciclo
    for(let i = 0; i < cellsNumber; i++){
        const cell = createCell();
        const cellIndex = i + 1;
        cell.innerText = cellIndex;

        if(bombs.includes(cellIndex)) cell.classList.add('isBomb');

        // ridimensiono la griglia
        if(mode === 2){
            cell.classList.add('hw-9')
        } else if(mode === 3){
            cell.classList.add('hw-7')
        }

        grid.appendChild(cell);

        //aggiungo un event listener ad ogni cella
        cell.addEventListener('click', function(){
            if(isEnd) return;
            if(bombs.includes(cellIndex)){
                endGame(true, cellsNumber, score);
            } else {
                if(score === maxScore){
                    endGame(false, cellsNumber, score);
                } else {
                    cell.classList.add('clicked');
                    score++
                    scoreTarget.innerText = score;
                }
            }

            // verifica per bloccare il console log se la cella è attiva
            if(cell.className.includes('clicked')) console.log('Cell number: ' + cellIndex);
        });
    }

    // mostro la griglia nel DOM
    grid.classList.remove('d-none');
});