let output = document.getElementById("output");
let index = 1;
let max = 1000;

while (index ** 2 <= 1000) {
    output.innerHTML += `${index ** 2} <br/>`;
    index++;
}