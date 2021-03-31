class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct() {}

  deleteProduct() {}

  showMessage() {}
}

//EVENTOS DO DOM
document.getElementById('product-form').addEventListener('submit', function () {
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const year = document.getElementById('year').value;
});

console.log(name, price, year);
