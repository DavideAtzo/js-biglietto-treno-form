'use strict';

//l'utente potrà inserire gli input grazie al prompt
const km = Number(prompt('inserire i km che vorresti fare'));
const etaUtente = Number(prompt('inserire la tua eta'));
console.log(km);
console.log(etaUtente);


// Calcolo biglietto
const prezzoAlKm = 0.21;
let prezzoBiglietto= km * prezzoAlKm;


// variabili sconto del biglietto 
const minorenne = 18;
const over65 = 65;22


if(etaUtente < 18)
prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.2;

else if(etaUtente >= 65)
prezzoBiglietto = prezzoBiglietto - prezzoBiglietto * 0.4;


// Inerisco i dati negli id per la visualizzazione degli input
document.getElementById('km').innerHTML = km;
document.getElementById('eta-utente').innerHTML = etaUtente;
document.getElementById('prezzo-biglietto').innerHTML = prezzoBiglietto.toFixed(2);
console.log(prezzoBiglietto);