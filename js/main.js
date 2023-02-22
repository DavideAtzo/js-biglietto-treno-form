'use strict';

//Dichiarazione variabili
const inputKm = document.getElementById('km-da-percorrere');
const inputNomeCognome = document.getElementById('nome-cognome');
const inputMinorenne = document.getElementById('minorenne');
const inputMaggiorenne = document.getElementById('maggiorenne');
const inputOver65 = document.getElementById('over65');
console.log(inputNomeCognome.value);
console.log(inputKm.value);
console.log(inputMinorenne.value);
console.log(inputMaggiorenne.value);
console.log(inputOver65.value);


// // Calcolo biglietto
// const prezzoAlKm = 0.21;
// let prezzoBiglietto= km * prezzoAlKm;


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