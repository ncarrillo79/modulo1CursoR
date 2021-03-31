/*1
const PeliculaUno = {
  nombre: 'Harry',
  Id: 01,

  reproducir() {
    return `reproduciendo pelicula... ${this.nombre}`;
  },
};
*/

/*
2
class Pelicula {
  constructor() {
    this.nombre = 'harry';
    this.id = 1;
  }
}

const PeliculaUno = new Pelicula();
console.log(PeliculaUno);

const PeliculaDos = new Pelicula();
console.log(PeliculaDos);
*/

/*class Pelicula {
  constructor() {
    this.nombre = 'harry';
    this.id = 1;
  }
}

const PeliculaUno = new Pelicula();
console.log(PeliculaUno);

const PeliculaDos = new Pelicula();
console.log(PeliculaDos);
*/

class Pelicula {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }

  reproducir() {
    return `reproduciendo pelicula ${this.nombre}`;
  }
}

class Serie extends Pelicula {
  constructor(nombre, id, capitulo) {
    super(nombre, id);
    this.cap = capitulo;
  }
  reproducirCapitulo() {
    return `Reproduciendo capitulo ${this.cap}... ${this.nombre}`;
  }
}
const PeliculaUno = new Pelicula('harry', 1);
const PeliculaDos = new Pelicula('aranha', 2);
const serieUno = new Serie('Dexter', 3, 55);

console.log(PeliculaUno.reproducir());
console.log(PeliculaDos.reproducir());
console.log(serieUno.reproducirCapitulo());
