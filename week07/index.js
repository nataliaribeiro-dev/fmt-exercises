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

  sell(quantity_sold) {
    if (quantity_sold > this.quantity) {
      console.log("Não temos estoque suficiente para a venda");
      return;
    }
    this.quantity -= quantity_sold;
    console.log(`Venda de ${quantity_sold} ${this.name} realizada com sucesso!`);
    console.log(`Estoque atual: ${this.quantity}`);
  }
}

//let product = new Product("Camiseta", 50, 100);

//product.sell(101);