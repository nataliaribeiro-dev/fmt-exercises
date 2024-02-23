//Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array.
//Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.

const prompt = require('prompt-sync')();

let fruits = [];

while (fruits.length < 3) {
  let question = prompt('Qual sua fruta preferida?');
  fruits.push(question);
}

console.log(fruits);
