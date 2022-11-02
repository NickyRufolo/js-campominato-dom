const griglia = document.getElementById(`griglia`);
console.log( griglia );



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

let num = 0 //creo variabile numero


//100 quadrati
for(let i = 0; i<100; i++){
    num = num + 1;
    let elementoCorrente = creazioneQuadrato(num); //L'ho chiamata elementoCorrente la variabile, perchè non avrei potuto usare creazioneQuadrato dato che è funziona
    console.log(elementoCorrente); //controlliamo se crea div con classe quadrato

    elementoCorrente.addEventListener(`click`, function(){ //mi creo un evento al click proprio in quell elemento associa evento al click
        console.log(this); //la possibilita di andare a targhetizzare l'elemento con cui stiamo lavorando
        this.classList.toggle(`yellow`); //di tutto quello che è l'html aggiungo la classe con il toggle active

    })

    griglia.append(elementoCorrente);

}



//griglia - genero le bombe - per altri numeri randomici
//crei array con bombe vuoto crei - 16 numeri randomici con math random - push - fai controllo con la funzione includes se incluso true senno false dentro un condizionale (distinuendo stringa e numero con parse ints)
//se l'utente clicca diventa rossa + frase hai perso, se diventa blu punteggio che aumenta.
//

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