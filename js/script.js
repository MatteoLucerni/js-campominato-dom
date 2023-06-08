console.log('JS OK');

// prendo gli elementi dal DOM
const buttonPlay = document.getElementById('button-play');
const grid = document.getElementById('grid');
const difficulty = document.getElementById('difficulty');
const scoreTarget = document.getElementById('score-box');
const maxBombs = 16;

// Creo la cella
const createCell = () => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
};

// Genero un numero casuale da min a max inclusi

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

// Creo termina partita

// const endGame = (hasHitBomb, numberBombs, score) => {
//     const allCells = grid.querySelectorAll('.cell')
//     for(let i = 0; i < numberBombs; i++){
//         cell = allCells[i];
//         cell.classList.add('bomb');
//     }
//     const message = hasHitBomb ? 'You lost!' : 'You won!';

//     console.log(message + ' Score: ' + score);
//     return;
// };

// Genero le bombe

const createBombs = maxBombs => {
    const bombs = [];
    while (bombs.length < maxBombs){
        let randomNumber = getRandomNumber(1, maxBombs);
        if(bombs.includes(randomNumber)){
            randomNumber = getRandomNumber(1, maxBombs);
        } else{
            bombs.push(randomNumber);
            console.log('while');
        }
    }
    return bombs;
}

// comparsa della griglia e ridimensionamento difficoltà

buttonPlay.addEventListener('click', function(){
    // reset della griglia e score
    grid.innerHTML = '';
    let score = 0;
    scoreTarget.innerText = 'Score: ' + score;

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

    // genero la lista di bombe
    const bombs = createBombs(maxBombs);
    console.log(bombs);

    // calcolo lo score massimo
    const maxScore = cellsNumber - bombs;
    console.log('Score to win: ' + maxScore);

    // creo il ciclo
    for(let i = 0; i < cellsNumber; i++){
        const cell = createCell();
        const cellIndex = i + 1;
        cell.innerText = cellIndex;

        //aggiungo un event listener ad ogni cella
        cell.addEventListener('click', function(){
            cell.classList.add('clicked');

            // verifica per bloccare il console log se la cella è attiva
            if(cell.className.includes('clicked')) console.log('Cell number: ' + cellIndex);
        });

        // ridimensiono la griglia
        if(mode === 2){
            cell.classList.add('hw-9')
        } else if(mode === 3){
            cell.classList.add('hw-7')
        }

        grid.appendChild(cell);
    }

    // mostro la griglia nel DOM
    grid.classList.remove('d-none');
});