# Campo minato VERSIONE AVANZATA

- Creo una funzione di **Partita terminata**:
    - coloro tutte le celle con la bomba di rosso:
        - **FINO A CHE** non raggiungo il numero di bombe massimo:
            - Prendo una cella che contiene la bomba
            - la coloro di rosso
    - salvo lo score attuale
    - **SE** l'utente ha colpito una bomba:
        - 'Hai perso'
    - **ALTRIMENTI**:
        - L'utente ha vinto: 'Hai vinto'
    - Mostro lo scorre salvato
    - **FINE**
- Salvo lo score dell'utente:
    - Imposto un valore iniziale e lo stampo in pagina
    - Calcolo lo score massimo:
        - Numero celle massime meno numero bombe nella griglia
- Genero numeri casuali tutti diversi fino ad un numero massimo e li metto nella lista bombe:
    - creo una lista che conterrà i miei numeri
    - **FIN QUANDO** non raggiungo il numero massimo di numeri:
        - **UNA VOLTA** genero un numero casuale
        - **FIN QUANDO** il numero generato è presente nella lista di numeri:
            - genero un numero casuale
        - inserisco il numero generato nella lista bombe
    - stampo in console la lista di numeri completa
- Controllo se l'utente ha preso una cella con la bomba:
    - Al click sulla cella:
        - **SE** il numero legato alla cella cliccata è presente nella lista bombe:
            - La cella diventa rossa
            - Salvo che l'utente ha preso una bomba
            - **Partita terminata**
        - **ALTRIMENTI**:
            - **SE** lo score attuale è minore dello score massimo:
                - **SE** la cella non è già stata cliccata:
                    - Incremento lo score attuale di 1
                    - La cella diventa azzurra
            - **ALTRIMENTI**:
                - **Partita terminata**
                
        

