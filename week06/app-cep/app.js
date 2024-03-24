// Função de validação simplificada
const validateCep = cep => /^[0-9]{5}-[0-9]{3}$/.test(cep);

// Função para exibir informações do endereço
const displayAddress = (data, container) => {
  const addressElement = document.createElement('div');
  addressElement.innerHTML = `
    <p>CEP: ${data.cep}</p>
    <p>Logradouro: ${data.logradouro}</p>
    <p>Bairro: ${data.bairro}</p>
    <p>Cidade: ${data.localidade}</p>
    <p>Estado: ${data.uf}</p>`;
  container.appendChild(addressElement);
}

// Função para verificar se o CEP já foi buscado
const isCepSaved = (cep) => {
  const addresses = JSON.parse(localStorage.getItem('endereco') || '[]');
  return addresses.some(address => address.cep === cep);
}

// Função aprimorada para buscar endereço
const fetchAddress = async () => {
  const cepInput = document.getElementById('cep');
  const cep = cepInput.value;
  if (!validateCep(cep)) {
    alert('Formato de CEP inválido. Deve ser 00000-000');
    return null;
  }
  if (isCepSaved(cep)) {
    alert('Este CEP já foi buscado.');
    return null;
  }
  try {
    const BASE_URL = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Erro ao buscar CEP');
    const data = await response.json();
    cepInput.value = '';
    return data;
  } catch (error) {
    alert(error.message);
    return null;
  }
}

// Funções para carregar e salvar endereços
const loadAddresses = () => {
  const addresses = JSON.parse(localStorage.getItem('endereco') || '[]');
  const addressHtml = document.getElementById('endereco');
  addresses.forEach(data => displayAddress(data, addressHtml));
}

const saveAddress = (data) => {
  const addresses = JSON.parse(localStorage.getItem('endereco') || '[]');
  addresses.push(data);
  localStorage.setItem('endereco', JSON.stringify(addresses));
}

// Função para manipulação do evento de busca de endereço
const getAddress = async (event) => {
  event.preventDefault();
  const data = await fetchAddress();
  if (data) {
    const addressHtml = document.getElementById('endereco');
    displayAddress(data, addressHtml);
    saveAddress(data);
  }
}

// Event Listeners
document.getElementById('cep').addEventListener('input', (event) => {
  document.getElementById('buscar').disabled = !validateCep(event.target.value);
});

document.getElementById('cep').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') getAddress(event);
});

document.getElementById('buscar').addEventListener('click', getAddress);
window.onload = loadAddresses;
