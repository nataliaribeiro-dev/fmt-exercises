const validateCep = (cep) => {
  const cepFormat = /^[0-9]{5}-[0-9]{3}$/;
  if (!cepFormat.test(cep)) {
    return false;
  }
  return true;
}

const fetchAddress = async () => {
  const cepInput = document.getElementById('cep');
  const cep = cepInput.value;

  if (!validateCep(cep)) {
    alert('Formato de CEP inválido. Deve ser 00000-000');
    return;
  }

  const BASE_URL = `https://viacep.com.br/ws/${cep}/json/`;
  const addressData = await fetch(BASE_URL);
  const data = await addressData.json();
  cepInput.value = ''; // clear the input
  return data;
}

const getAddress = async (event) => {
  event.preventDefault(); // prevent form submission
  const addressHtml = document.getElementById('endereco');

  const data = await fetchAddress();
  if (data) {
    addressHtml.innerHTML =
      `<p>CEP: ${data.cep}</p>
    <p>Logradouro: ${data.logradouro}</p>
    <p>Bairro: ${data.bairro}</p>
    <p>Cidade: ${data.localidade}</p>
    <p>Estado: ${data.uf}</p>`;
  }
}

// Add event listeners
document.getElementById('cep').addEventListener('input', (event) => {
  const searchButton = document.getElementById('buscar');
  if (event.target.value.length === 9 && validateCep(event.target.value)) {
    searchButton.disabled = false;
  } else {
    searchButton.disabled = true;
  }
});

document.getElementById('cep').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    getAddress(event);
  }
});

document.getElementById('buscar').addEventListener('click', getAddress);