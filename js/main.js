'use strict';

//Dichiarazione variabili
const btnGenera = document.getElementById('btn-genera');


// variabile prezzo biglietto a km 
const prezzoAlKm = 0.21;

// evento del calcolo sul click del bottone 
btnGenera.addEventListener('click',
    function(){
        // prendere gli input e inserirli in delle variabili 
        const inputKm = document.getElementById('km-da-percorrere').value;
        const inputEtaUtente = document.getElementById('fascia-eta').value;
        const inputNomeCognome = document.getElementById('nome-cognome').value;
        let nTreno = Math.floor(Math.random() * 99999);

        // visualizzazione su console 
        console.log(inputNomeCognome);
        console.log(inputKm);

        let prezzoBiglietto = inputKm * prezzoAlKm;
        // condizione se minorenne oppure over65 
        if(inputEtaUtente === 'minorenne'){
            prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.2;
        }else if(inputEtaUtente  === 'over65'){
            prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.4;
            
        }
        // visualizzazione su console del biglietto e sullo schermo
        console.log(`${prezzoBiglietto.toFixed(2)}€`);
        document.getElementById('prezzo-biglietto').innerHTML = prezzoBiglietto.toFixed(2);
        document.querySelector('.nome-cognome').innerHTML = inputNomeCognome;
        document.querySelector('.n-treno').innerHTML = nTreno;
    }
);

