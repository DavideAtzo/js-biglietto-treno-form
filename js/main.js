'use strict';

//Dichiarazione variabili
const btnGenera = document.getElementById('submit');
const btnReset = document.getElementById('reset');
const stampaBiglietto = document.querySelector(".biglietto-personale")
// variabile prezzo biglietto a km 
const prezzoAlKm = 0.21;


// evento del calcolo sul click del bottone 
btnGenera.addEventListener('click',
    function () {
        // prendere gli input e inserirli in delle variabili 
        const inputKm = document.getElementById('km-da-percorrere').value;
        const inputEtaUtente = document.getElementById('fascia-eta').value;
        const inputNomeCognome = document.getElementById('nome-cognome').value;
        
        let tipoBiglietto = "Biglietto Standard";

        // Restituisce un numero intero casuale compreso tra: 
        let nTreno = Math.floor(Math.random() * 99999);
        let nCarrozza = Math.floor(Math.random() * 10);

        // visualizzazione su console 
        console.log(inputNomeCognome);
        console.log(inputKm);

        let prezzoBiglietto = inputKm * prezzoAlKm;
        // condizione se minorenne oppure over65 
        if (inputEtaUtente === 'minorenne') {
            prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.2;
            tipoBiglietto = "Biglietto giovane";

        } else if (inputEtaUtente === 'over65') {
            prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.4;
            tipoBiglietto = "Biglietto piu che adulto";

        }
        stampaBiglietto.classList.remove("biglietto-personale");

        // visualizzazione su console del biglietto e sullo schermo
        console.log(`${prezzoBiglietto.toFixed(2)}€`);
        document.getElementById('prezzo-biglietto').innerHTML = prezzoBiglietto.toFixed(2);
        document.querySelector('.nome-cognome').innerHTML = inputNomeCognome;
        document.querySelector('.n-treno').innerHTML = nTreno;
        document.querySelector('.n-carrozza').innerHTML = nCarrozza;
        document.querySelector('.tipo-biglietto').innerHTML = tipoBiglietto;

    }
);


btnReset.addEventListener('click', 
function(){
    stampaBiglietto.classList.add("biglietto-personale");
    
})
