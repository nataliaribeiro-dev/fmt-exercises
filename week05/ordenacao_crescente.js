//Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros. Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.


const prompt = require('prompt-sync')();
let numbers = [];

while (numbers.length < 5) {
  let question = Number(prompt('Digite um número:'));
  numbers.push(question);
};

let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);