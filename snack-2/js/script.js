let numbers = prompt("Inserisci un numero");

let output = document.getElementById("output");

for(let i = 1; i <= numbers; i++) {
    output.innerHTML += `${i*i*i} <br/>`
}