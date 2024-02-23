//Crie um array chamado numeros contendo cinco números inteiros. Utilize um loop for para imprimir cada número do array no console.


const prompt = require('prompt-sync')();
let numbers = [];

while (numbers.length < 5) {
  let question = Number(prompt('Digite um número:'));
  numbers.push(question);
};

numbers.forEach((number) => {
  console.log(number);
});

