//ex01: Crie uma classe chamada Produto com os seguintes 
//atributos:

// nome, preco, quantidade;

class Product {
  name;
  price;
  quantity;

  //ex02: Crie um construtor para a classe Produto que permita receber os valores base para cada um dos parâmetros.
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}