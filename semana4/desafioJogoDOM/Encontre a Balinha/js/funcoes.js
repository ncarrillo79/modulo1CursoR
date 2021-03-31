// obter numero aleatório da posicao da bala no parqunho
let numeroAleatorio = (limite) => {
  return Math.floor(Math.random() * limite);
};

// calcular distancia entre dos pontos(bala e click)
let calculaDistancia = (e, objetivo) => {
  let difX = e.offsetX - objetivo.x;
  let difY = e.offsetY - objetivo.y;
  return Math.sqrt(difX * difX + difY * difY);
};

// mostrar avisos a segundo a distancia da bala
let queTaoPerto = (distancia) => {
  if (distancia < 30) {
    return 'Ta perto sim!!!!';
  } else if (distancia < 40) {
    return 'Muito perto';
  } else if (distancia < 60) {
    return 'mais perto';
  } else if (distancia < 100) {
    return 'Perto';
  } else if (distancia < 180) {
    return 'longe';
  } else if (distancia < 360) {
    return 'Muito Longe!!!';
  } else {
    return 'Poxa longe!!!';
  }
};
