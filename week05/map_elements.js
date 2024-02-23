//Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array chamado quadrados que contenha o quadrado de cada número do array numeros. Imprima o array quadrados no console. Use o método map para realizar a criação de um novo array.

const prompt = require('prompt-sync')();
let numbers = [];

while (numbers.length < 5) {
  let question = Number(prompt('Digite um número:'));
  numbers.push(question);
};

let squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers);