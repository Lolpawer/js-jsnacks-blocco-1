let number;
let somma = 0;
let output = document.getElementById("output");

do {
    number = prompt("Inserisci un nome di 4 cifre");
} while (number.length !== 4) {
    for (let i = 0; i < 4; i++) {
        somma = somma + parseInt(number.charAt(i));
    }
}

output.innerHTML = somma;