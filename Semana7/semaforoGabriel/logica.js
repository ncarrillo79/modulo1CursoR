// ========================= Criando os elementos com o DOM =========================

// Estilo da luz
let luzStyle = {
  width: '128px',
  height: '128px',
  borderRadius: '64px',
  backgroundColor: 'red',
  marginTop: '32px',
  marginBottom: '32px',
};

// Semáforo
let semaforo = document.createElement('div');
semaforo.style.display = 'inline-block';
semaforo.style.padding = '0px 32px';
semaforo.style.backgroundColor = 'grey';
document.body.appendChild(semaforo);

// Luz vermelha
let luzVermelha = document.createElement('div');
// Busquem mais informações sobre o que o Object.assign faz na documentação:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
Object.assign(luzVermelha.style, luzStyle);

// Luz amarela
luzStyle.backgroundColor = 'yellow';
let luzAmarela = document.createElement('div');
Object.assign(luzAmarela.style, luzStyle);

// Luz verde
luzStyle.backgroundColor = 'green';
let luzVerde = document.createElement('div');
Object.assign(luzVerde.style, luzStyle);

// Coloca as luzes no semáforo
semaforo.appendChild(luzVermelha);
semaforo.appendChild(luzAmarela);
semaforo.appendChild(luzVerde);

// ========================= Lógica do semáforo =========================

// Representando o semáforo como um objeto na notação JSON
let semaforoObj = {
  // ========= Atributos =========

  // Tempos do sinal
  tempoVerde: 7500,
  tempoAmarelo: 3000,
  tempoVermelho: 6000,

  // ========= Métodos =========

  // Mudança de luz arbitrária
  trocaLuz: function (novaLuz) {
    if (novaLuz == 'verde') {
      // Cores das luzes
      luzVermelha.style.backgroundColor = 'darkgrey';
      luzAmarela.style.backgroundColor = 'darkgrey';
      luzVerde.style.backgroundColor = 'green';

      // Chama a função "trocaProAmarelo" só depois do tempo do verde passar
      // Por que aqui o "this" funciona pra uma função setinha? Por que ele não
      // funciona pra uma função anônima declarada com "function"?
      //
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
      //
      // https://www.geeksforgeeks.org/difference-between-regular-functions-and-arrow-functions/
      //
      setTimeout(() => {
        this.trocaLuz('amarelo');
      }, this.tempoVerde);
    } else if (novaLuz == 'amarelo') {
      // Cores das luzes
      luzVermelha.style.backgroundColor = 'darkgrey';
      luzAmarela.style.backgroundColor = 'yellow';
      luzVerde.style.backgroundColor = 'darkgrey';

      // Chama a função "trocaProVermelho" só depois do tempo do amarelo passar
      setTimeout(() => {
        this.trocaLuz('vermelho');
      }, this.tempoAmarelo);
    } else if (novaLuz == 'vermelho') {
      // Cores das luzes
      luzVermelha.style.backgroundColor = 'red';
      luzAmarela.style.backgroundColor = 'darkgrey';
      luzVerde.style.backgroundColor = 'darkgrey';

      // Chama a função "trocaProVerde" só depois do tempo do vermelho passar
      setTimeout(() => {
        this.trocaLuz('verde');
      }, this.tempoVermelho);
    }
  },
};

// Para começar, precisamos chamar pelo menos uma vez a troca de luz, a partir daí ele ficará para sempre
semaforoObj.trocaLuz('verde');
