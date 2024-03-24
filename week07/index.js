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
  //  ex. 03: Crie um método chamado sell que permita vender uma quantidade do produto e atualize o estoque.

  sell(quantity_sold) {
    if (quantity_sold > this.quantity) {
      console.log("Não temos estoque suficiente para a venda");
      return;
    }
    this.quantity -= quantity_sold;
    console.log(`Venda de ${quantity_sold} ${this.name} realizada com sucesso!`);
    console.log(`Estoque atual: ${this.quantity}`);
  }

  //ex04: Crie um método chamado Repor() dentro da classe Produto.
  // Este método deve receber como parâmetro a quantidade reposta e adicionar o montante à quantidade do produto.
  replace(quantity_replaced) {
    this.quantity += quantity_replaced;
    console.log(`Reposição de ${quantity_replaced} ${this.name}s realizada com sucesso!`);
    console.log(`Estoque atual: ${this.quantity} unidades.`);
  }

  //ex05: Crie um método chamado de MostrarEstoque() dentro da classe Produto.

  showStock() {
    console.log(`O produto ${this.name} possui ${this.quantity} unidades disponíveis em estoque.`);
  }
}

let product = new Product("Camiseta", 50, 100);

product.showStock();