//Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos do array. Utilize o reduce para realizar a soma.


const prompt = require('prompt-sync')();
let numbers = [];

while (numbers.length < 5) {
  let question = Number(prompt('Digite um número:'));
  numbers.push(question);
};

let sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum);