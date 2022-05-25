/* 
Il software deve chiedere per 5 volte all’utente 
di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti.
*/

//l'esercizio si può svolgere sia con dowhile che con for
//creiamo un indice che ci permetterà di contare le volte 

let i = 0;
let som = 0;
//con un ciclo do while verifichiamo innanzitutto che l'utente inserisca un numero valido
//poi andiamo a sommare nella variabile creata in precedenza i valori che l'utente ha inserito

do {
    const NumRichiesto = parseInt(prompt("Inserisci un numero maggiore di 0"));
    if (isNaN(NumRichiesto) || NumRichiesto < 0) {
        alert("Attenzione!! Hai inserito un valore sbagliato o un numero negativo! Ricorda che il numero da insere dovrà essere maggiore di 0")
    } else {
        i++;
        som += NumRichiesto;
    }

} while(i < 5);

document.body.innerHTML =
    `
    <div class="container py-4 text-center">
    <h1>La somma dei numeri inseriti è:</h1>
    <span class="text-success">${som}</span>
    </div>
`