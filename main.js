//Aggiungo variabile griglia
const griglia = document.getElementById(`griglia`);
console.log( griglia );
let arrayBombs = []; //array vuoto x bombe
let punteggio;
let play; //livello e restart


// creiamo una funzione per creare un div quadrato dentro la griglia
function creazioneQuadrato(num){ // setto un parametro che mi servira per inserire un testo nel div lo assoccio a qualcosa che a me serve
    const div = document.createElement(`div`); //creo div con la funzione
    div.classList.add(`quadrato`); //do class quadrato e me lo modifico nel Css
    //inseriamo il numero dentro al div
    div.innerHTML = num;
    return div;  //<div class="quadrato"></div> cio che viene salvato effettivamente
}


console.log( creazioneQuadrato() );

//inseriamo il quadrato creato dalla funzione nella griglia
//griglia.append(creazioneQuadrato());

//100 quadrati
function generateGrid() {

    arrayBombs = generateBomb(); // mi ritorna return bombs (ovvero l'array con 16 numeri generati random)
    console.log(arrayBombs);

for(let i = 1; i<=100; i++){
    let elementoCorrente = creazioneQuadrato(i); //L'ho chiamata elementoCorrente la variabile, perchè non avrei potuto usare creazioneQuadrato dato che è funziona
    console.log(elementoCorrente); //controlliamo se crea div con classe quadrato

    //aggiungi evento al click in base a se contiene bomba o no 
    if (arrayBombs.includes(i)) {  //se lista bombe corrisponde è inclusa nel (i) (1-100) fai qualcosa --> function al click
        elementoCorrente.addEventListener(`click`, function () {
            this.classList.add(`bombs`);
            this.innerText = `🚨`;
            //questo è quello che clicchi, quando clicchi aggiunge la classe
        })
    }
    else {
        elementoCorrente.addEventListener(`click`, function () { //mi creo un evento al click proprio in quell elemento associa evento al click
            console.log(this); //la possibilita di andare a targhetizzare l'elemento con cui stiamo lavorando
            this.classList.toggle(`yellow`); //di tutto quello che è l'html aggiungo la classe con il toggle active
        })
    }
    griglia.append(elementoCorrente);
    }
}

    generateGrid();
//Aggiungo variabile punti e array bombe


// Funzione bombs
function generateBomb(){
    let bombs = []; //creo array vuoto dove inserire i numreri generati
    let bomb; //creo variabile con cui genero i numeri e che mi servira ad inserirli nell array bombs
    for (let x = 0; x < 16; x++){ //ciclo che gira per 16 volte
        bomb = Math.floor( Math.random() * 100 ) + 1; /// genero numeri
        bombs.push(bomb); //inserisco variabile bomb (con cui genera numeri x 16 volte) all interno dll'array bombs
    }
    return bombs; // al richiamo della funzione mi ritonerna bombs con 16 numeri generati randomuicamente
}
console.log(generateBomb())

// Stabilire la fine del gioco
// 1 - Crea Funzione 
// 2 - in base a cosa clicchi 
//     - se clichi su un elemento : il contatore conteggia i click
//     - altrimenti se clicchi una bomba stampa a schermo ho perso e rivela le bombe 

// function endGame(){

// }


//griglia - genero le bombe - per altri numeri randomici
//crei array con bombe vuoto crei - 16 numeri randomici con math random - push - fai controllo con la funzione includes se incluso true senno false dentro un condizionale (distinuendo stringa e numero con parse ints)
//se l'utente clicca diventa rossa + frase hai perso, se diventa blu punteggio che aumenta.
//



/*
Scompongo esercizio
1- Creazioni variabili
    -Griglia :  mi servirà per mettere i quadrati all'interno
    -DimGriglia : per stabilire la dimensione griglia(Bonus)
    -Play: per aggiungere funzione di start al click
    -array bombe : per inserigli le bombe generate random da una funzione
    -Punti: per stabilire il punteggio
    -PuntiToWin : per stabilire quando si vince
2- Creazione funzioni
    - per creare quadrati
    - per stabilire difficoltà e di conseguenza quanti quadrati generare
    - per stabilire l'inizio
    - per stabilire la fine
    - per generare bombe
    
*/



// Ciao ragazzi,
// Esercizio di oggi: Campo Minato
// nome repo: js-campominato-dom
// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS:
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.