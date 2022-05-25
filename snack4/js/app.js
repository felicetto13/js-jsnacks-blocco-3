/* 
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. 
Interrompi il ciclo appena il nome è stato trovato.
*/

//creiamo un array contenente i nomi degli invitati

const nomiInvitati = ["Francesco","Felice", "Marco", "Alessandro", "Giuseppe", "Filippo", "Andrea", "Giovanna", "Domenico", "Mattia"]

//Chiediamo all'utente il suo nome
const nomeUser = prompt("Ciao! Benvenuto alla festa del grande Gatsby!! Questa è una festa privata quindi c'è bisogno di inserire il tuo nome per poter accedervi")

//creiamo e inizializziamo l'indice che ci permetterà di controllare nelle posizioni dell'array
let index = 0;
//tramite un while andiamo a controllare se il nome inserito dall'utente è nella lista o no

//creaimo una variabile booleana che ci consentirà dopo di verificare se il nome è stato trovato o no
let nomeTrovato = false;
while (!(nomeTrovato) && index < nomiInvitati.length){
    if (nomeUser === nomiInvitati[index]) {
        nomeTrovato = true;
    } else {
        index++;
    }
}
console.log(index)
if (nomeTrovato) {
    document.body.innerHTML =
        `
    <div class="container py-4 text-center">
    <h1>Benvenuto, sig. <i class="text-primary fw-bold">${nomeUser}</i>, alla festa  del grande Gatsby</h1>
    <h2 class="text-uppercase text-success">Buon divertimento!</h2>
    </div>
    `
}
else{
    document.body.innerHTML =
    `
<div class="container py-4 text-center">
<h1>Sig. <i class="text-secondary fw-bold">${nomeUser}</i>, non risulti nell'elenco degl'invitati</h1>
<h2 class="text-uppercase text-danger">Ci dispiace!</h2>
</div>
`
}