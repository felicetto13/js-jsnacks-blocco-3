/* 
Fai inserire un numero, che chiameremo N, all’utente. 
Genera N array, 
ognuno formato da 10 numeri casuali da 1 a 100. 
Ogni volta che ne crei uno, stampalo.
*/
let verifica = false
let N =0;
//chiedo all'utente di inserire il numero di array da creare e verifico il valore inserito
do {
    const Num = parseInt(prompt("Quanti array vuoi creare?"));

    if (isNaN(Num)) {
        alert("Devi inserire un numero valido!")
    } else {
        verifica = true;
        N = Num;
    }


} while (!(verifica))

document.body.innerHTML = `<h1 class="text-center my-2">Stampa degli array casuali creati</h1>`

for (let i = 0; i < N; i++) {
    const arrayN = [];
    for (let j = 0; j < 10; j++) {
        arrayN.push(Math.floor((Math.random() * 100) + 1));
    }
    const div = document.createElement("div");
    div.id = "every-array"
    div.innerHTML =
        `
    <div class="container text-center py-4">
    <h3>Array N^${(i+1)}</h3>
    <span>${arrayN}</span>
    </div>
    `
    document.body.append(div);

}



