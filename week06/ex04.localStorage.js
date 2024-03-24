//Crie uma função que irá pedir 3 informações através do prompt, o nome, a idade e o email. Monte essas informações em um objeto igual ao do exercício 03, após isso salve esse objeto com a chave “user” no localStorage.

const getUserInfo = () => {
  const name = prompt('Digite o nome:');
  const age = prompt('Digite a idade:');
  const email = prompt('Digite o email:');

  return {
    nome: name,
    idade: age,
    email,
  };
}

const saveUser = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(getUserInfo());
  localStorage.setItem('users', JSON.stringify(users));
}

/**
 * Displays user information retrieved from localStorage.
 */
const showInformation = () => {
  // Recuperar a lista de usuários do localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Iterar sobre a lista de usuários
  for (const user of users) {
    const newP = document.createElement('p');
    newP.innerHTML = `Nome: ${user.nome}`;
    newP.innerHTML += `<br>Idade: ${user.idade}`;
    newP.innerHTML += `<br>Email: ${user.email}`;
    document.body.appendChild(newP);
  }
}

saveUser();
console.log(showInformation());