let somma = 0;
let numero = 0;

for (let i = 0; i < 10; i++) {
    numero = prompt("Inserisci un numero");
    somma = somma + parseInt(numero);
}

let output = document.getElementById("output");
output.innerHTML = somma;