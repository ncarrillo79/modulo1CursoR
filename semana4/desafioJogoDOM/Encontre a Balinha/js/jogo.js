// qqui ficam as funções {
//   NumeroAleatorio,
//   calculaDistancia,
//   queTaoPerto
// } do arquivo funcoes.js;

// longitud do espaco onde esta a bala(mapa)
const WIDTH = 400;
const HEIGH = 400;

let objetivo = {
  x: numeroAleatorio(WIDTH),
  y: numeroAleatorio(HEIGH),
};

// para controlar o click do mouse
let $parque = document.querySelector('#parque');
let $distancia = document.querySelector('#distancia');
let clicks = 0;

$parque.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distancia = calculaDistancia(e, objetivo);
  let quePerto = queTaoPerto(distancia);
  $distancia.innerHTML = `<h1>${quePerto}</h1>`;

  if (distancia < 20) {
    alert(`achou a balinha em ${clicks} clicks!`);
    location.reload();
  }
});
