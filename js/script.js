console.log('JS OK');

// prendo gli elementi dal DOM
const buttonPlay = document.getElementById('button-play');
const grid = document.getElementById('grid');
const difficulty = document.getElementById('difficulty');

// Creo la cella
const createCell = () => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
};

// comparsa della griglia e ridimensionamento difficoltàà

buttonPlay.addEventListener('click', function(){
    // reset della griglia
    grid.innerHTML = '';

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

    // creo il ciclo
    for(let i = 0; i < cellsNumber; i++){
        const cell = createCell();
        const cellIndex = i + 1;
        cell.innerText = cellIndex;

        //aggiungo un event listener ad ogni cella
        cell.addEventListener('click', function(){
            cell.classList.toggle('clicked');

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