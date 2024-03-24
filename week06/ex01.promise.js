//Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem: "Número validado é par”.

//Caso o valor seja ímpar, retorne para o catch a mensagem: “Error: número informado é impar”.

//OBS: Se for par ele deve chamar o “resolve”, se não for par ele irá chamar o “reject”. Não esqueça de enviar a mensagem como parâmetro

/**
 * Checks if a number is even.
 * @param {number} number - The number to be checked.
 * @returns {Promise<string>} A promise that resolves to "Número validado é par" if the number is even,
 * or rejects with an error message "Error: número informado é impar" if the number is odd.
 */
function isEven(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("Número validado é par");
    } else {
      reject("Error: número informado é impar");
    }
  });
}

isEven(2)
  .then(result => console.log(result))
  .catch(error => console.log(error));