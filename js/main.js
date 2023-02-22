'use strict';

//Dichiarazione variabili
const btnGenera = document.getElementById('btn-genera');

const prezzoAlKm = 0.21;

btnGenera.addEventListener(
    'click',
    function(){
        const inputKm = document.getElementById('km-da-percorrere').value;
        const inputEtaUtente = document.getElementById('fascia-eta').value;
        const inputNomeCognome = document.getElementById('nome-cognome').value;

        console.log(inputNomeCognome);
        console.log(inputKm);

        let prezzoBiglietto = inputKm * prezzoAlKm;

        if(inputEtaUtente === 'minorenne'){
            prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.2;
        }else if(inputEtaUtente  === 'over65'){
            prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.4;
            
        }
        console.log(`${prezzoBiglietto.toFixed(2)}€`);
    
    }
);




// let prezzoBiglietto = inputKm * prezzoAlKm;
// console.log(prezzoBiglietto);


// // Calcolo biglietto
// const prezzoAlKm = 0.21;
// let prezzoBiglietto= inputKm * prezzoAlKm;


// // variabili sconto del biglietto
// const minorenne = 18;
// const over65 = 65;

// Inerisco i dati negli id per la visualizzazione degli input
// document.getElementById('km').innerHTML = km;
// // document.getElementById('eta-utente').innerHTML = etaUtente;
// document.getElementById('prezzo-biglietto').innerHTML = prezzoBiglietto.toFixed(2);
// console.log(prezzoBiglietto);