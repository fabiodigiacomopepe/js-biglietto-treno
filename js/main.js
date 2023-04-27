/*  RICHIESTA
Il programma dovrà chiedere all’utente
    -il numero di chilometri che vuole percorrere
    -l’età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
secondo queste regole:
    -il prezzo del biglietto è definito in base ai km (0.21 € al km)
    -va applicato uno sconto del 20% per i minorenni
    -va applicato uno sconto del 40% per gli over 65

L’output del prezzo finale va messo fuori in forma umana
(con massimo due decimali, per indicare centesimi sul prezzo) */


// Dichiaro le mie variabili GLOBALI
let howKm, userEta, finalPrice, messaggio;

// Chiedo quanti km utente vuole percorrere l'utente
howKm = parseInt(prompt("Quanti km vuoi percorrere?"));

// Chiedo età dell'utente
userEta = parseInt(prompt("Quanti anni hai?"));

console.log("km da percorrere =", howKm, "/ età =", userEta);

// Fisso prezzo al km
const euroKm = 0.21;

// Calcolo prezzo finale
finalPrice = howKm * euroKm;

console.log("prezzo finale =", finalPrice, "€");

// Creo messaggio per l'utente
messaggio = finalPrice.toFixed(2) + "€";

// Mostro il  messaggio a schermo
document.getElementById("mio_id").innerHTML = messaggio;