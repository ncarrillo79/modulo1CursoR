class Cachorro {
  constructor(
    peloCutomizado,
    porteCustomizado,
    racaCustomizada,
    idadeCustomizada
  ) {
    this.pelo = peloCutomizado;
    this.porte = porteCustomizado;
    this.raca = racaCustomizada;
    this.idade = idadeCustomizada;
  }

  correr() {
    return 'gosto de correr';
  }

  comer() {
    return 'Quero um bife, nada de ração :P';
  }

  brincar() {
    return 'Me joga essa bolinha, quero pegar';
  }
}

let cachorro1 = new Cachorro('caramelo', 'médio', 'viralata', 2);
let cachorro2 = new Cachorro('preto', 'pequeno', 'pinsher', 3);
let cachorro3 = new Cachorro('branco', 'grande', 'husky', 5);

console.log(cachorro1);
console.log(cachorro2);
console.log(cachorro3);
