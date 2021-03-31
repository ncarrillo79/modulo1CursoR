let calculator = {
  display : "",
  resultado: "",

  mostrarVisor(valor) {
   this.display = document.querySelector("#display");
   this.display.textContent+=valor;
  },
  limparDisplay(valor) {
    this.display.textContent = valor;
  },
  calculaValores () {
    console.log(this.display.textContent);
    this.resultado = eval(this.display.textContent);
    this.display.textContent = this.resultado;
    },
  apagarUltimoDigito () {
    let apagar = this.display.textContent;
    this.display.textContent = apagar.substring(0, apagar.length - 1);
  }
}