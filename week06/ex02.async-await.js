//Crie uma função chamada getUserInfo que simula uma consulta assíncrona a um servidor para obter informações de um usuário. Essa função deve retornar um objeto com as informações de um usuário, como nome, idade e email (você pode definir os valores). Com o setTimeout simule o tempo de espera da consulta para demorar 2 segundos. Utilize async/await para realizar a chamada de forma assíncrona.

//Em seguida, crie outra função que utiliza getUserInfo para obter as informações do usuário e, após receber essas informações, exibe-as no console.

/**
 * Retrieves user information asynchronously.
 * @returns {Promise<Object>} A promise that resolves to an object containing user information.
 * @rejects {string} An error message if user information cannot be retrieved.
 */
const getUserInfo = async () => {
  const userInfo = {
    name: 'John Doe',
    age: 30,
    email: 'john@john.com'
  };
  return new Promise((resolve, reject) => {
    if (userInfo) {
      setTimeout(() => {
        resolve(userInfo);
      }, 2000);
    } else {
      reject('Error: could not get user info');
    }
  });
};

const showUserInfo = async () => {
  const userInfo = await getUserInfo();
  return userInfo;
};

console.log(showUserInfo().then(result => console.log(result)));