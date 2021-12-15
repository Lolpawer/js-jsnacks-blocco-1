let output = document.getElementById("output");
let numberList = [];
let number = 0;
let sum = 0;

do {
    number = prompt("Inserisci un numero");

    sum = sum + parseInt(number);

    numberList.push(parseInt(number));
} while (sum < 50);

output.innerHTML = sum;