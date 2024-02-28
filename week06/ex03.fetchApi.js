// Crie um arquivo JSON chamado data.json com a seguinte estrutura interna:

// {
//   "nome": "João",
//   "idade": 30,
//   "email": "joao@example.com"
// }
// ‌

// Após isso, utilize a fetch API para obter o arquivo JSON e, em seguida, a resposta deve ser convertida para o formato JSON usando o método .json() . O conteúdo JSON deve ser então exibido na página HTML.
async function fetchJson() {
  const response = await fetch('./data/data.json');
  const data = await response.json();

  // Exibe o conteúdo JSON na página HTML
  const body = document.querySelector('body');
  const pre = document.createElement('pre');
  pre.innerHTML = JSON.stringify(data, null, 2);
}

fetchJson().catch(error => console.error(error));
