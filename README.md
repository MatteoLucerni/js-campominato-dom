# Campo minato

- Prendo gli elemento dal DOM:
    - target della griglia
    - bottone per far comparire la griglia
    - select per la difficoltà
- stabilisco quante rows e cols ha la griglia:
    - **SE** seleziona easy:
        - il numero massimo delle celle sarà 100
    - **ALTRIMENTI SE** seleziona normal:
        - il numero massimo delle celle sarà 81
        - la larghezza delle celle si adatterà
    - **ALTRIMENTI** seleziona hard:
        - il numero massimo delle celle sarà 49
        - la larghezza delle celle si adatterà
- calcolo in numero massimo di celle
- Creo la singola cella
- **FINO A CHE** non ho raggiunto il numero massimo di celle:
    - inserisco una cella nella riglia
    - gli metto un numero di riferimento
    - aumento il numero di riferimento di 1
    - metto in ascolto la cella al click:
        - una volta cliccato lo sfondo della cella diventa azzurro