'use strict';

//********************************
//*** Función Arrow | Fat Arrow | Lambda

var saludar = (nombre) => 'Hola ' + nombre;

console.log(saludar('Susana'));

var sumar = (cantidad) => cantidad + 10;
console.log(sumar(10));

var calcular = (datoA, datoB) => datoA + datoB;
console.log(calcular(10, 15));

var generar = (datoA, datoB) => {
  var datoC = 5;
  return datoA + datoB + datoC;
};
console.log(generar(10, 15));

var validar = () => {
  return 'Validación correcta';
};
console.log(validar());

//******************************************
// https://youtu.be/KGYHCnb95-Y

// esta funcion aquí embaixo esta apontando o objeto global (ver video)
// const person = {
//   name: 'norma',
//   getName: () => this.name,
// };

// console.log(person.getName());

//***precissamos transforma ela em uma declaração de function tradicional

// const person = {
//   name: 'norma',
//   getName: function () {
//     return this.name;
//   },
// };

// console.log(person.getName());

//***podemos encurtar a funcão ali acima assim:

// const person = {
//   name: 'norma',
//   getName() {
//     return this.name;
//   },
// };

// console.log(person.getName());

//para evitar 0 this posso usar o propio objeto person, assim:

// const person = {
//   name: 'norma',
//   getName() {
//     return person.name;
//   },
// };

// console.log(person.getName());

//******************
//para usar arrow funtion, devo usar o objeto diretamente no lugar do this, assim eu estou referenciando o proprio objeto, ali tanto faz se uso arrow fucntion ou tradicional function*/

// const person = {
//   name: 'norma',
//   getName: () => person.name,
// };

//console.log(person.getName());
