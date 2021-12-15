let output = document.getElementById("output");
let index = 1;
let max = 1000;

while (2 ** index <= 1000) {
    output.innerHTML += `${2 ** index} <br/>`;
    index++;
}