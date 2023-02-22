'use strict';

//Dichiarazione variabili
let inputKm = document.getElementById('km-da-percorrere'.value);
let inputNomeCognome = document.getElementById('nome-cognome'.value);
const inputMinorenne = document.getElementById('minorenne');
const inputMaggiorenne = document.getElementById('maggiorenne');
const inputOver65 = document.getElementById('over65');
const btnGenera = document.getElementById('btn-genera');

console.log(inputMinorenne);
console.log(inputMaggiorenne);
console.log(inputOver65);

const prezzoAlKm = 0.21;

btnGenera.addEventListener('click',
    function () {
        inputKm = document.getElementById('km-da-percorrere'.value);
        inputNomeCognome = document.getElementById('nome-cognome'.value);
    }
)
console.log(inputNomeCognome);
console.log(inputKm);


// // Calcolo biglietto
// const prezzoAlKm = 0.21;
// let prezzoBiglietto= inputKm * prezzoAlKm;


// // variabili sconto del biglietto
// const minorenne = 18;
// const over65 = 65;

// if(etaUtente < 18)
// prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.2;

// else if(etaUtente >= 65)
// prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.4;


// Inerisco i dati negli id per la visualizzazione degli input
// document.getElementById('km').innerHTML = km;
// // document.getElementById('eta-utente').innerHTML = etaUtente;
// document.getElementById('prezzo-biglietto').innerHTML = prezzoBiglietto.toFixed(2);
// console.log(prezzoBiglietto);