/* 
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente
e a inserirli nell’array 
fino a quando la somma degli elementi è minore di 50. 
 */

// creiamo array vuoto
let arrayEmpty = [];

//creiamo variabile somma e la inizializziamo a 0
let somma = 0;

//con un ciclo while, inseriamo il numero nell'array vuoto e lo sommiamo alla variabile somma, fino a quando la somma sarà minore di 50 
while (somma < 50) {
    const numeroDaInserire = parseInt(prompt("Inserisci un numero da inserire:"));
    somma += numeroDaInserire;
    arrayEmpty.push(numeroDaInserire);
}
//stampiamo il risultato a video
document.body.innerHTML =
    `
<div class="container py-4 text-center">
<h1>L'array creato è</h1>
<span>${arrayEmpty}</span>
</div>
`