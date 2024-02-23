//Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.

const prompt = require('prompt-sync')();

let fruits = [];

while (fruits.length < 3) {
  let question = prompt('Qual sua fruta preferida?');
  fruits.push(question);
}

fruits.push('Banana');
console.log(fruits)
fruits.shift();

console.log(fruits);