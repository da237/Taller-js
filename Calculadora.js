const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b === 0 ? "Error" : a / b;

console.log("Suma:", sumar(10, 5));
console.log("Resta:", restar(10, 5));
console.log("Multiplicación:", multiplicar(10, 5));
console.log("División:", dividir(10, 5));