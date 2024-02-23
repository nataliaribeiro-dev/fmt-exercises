//Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores. Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.


const prompt = require('prompt-sync')();
let numbers = [];

while (numbers.length < 5) {
  let question = Number(prompt('Digite um número:'));
  numbers.push(question);
};

let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);