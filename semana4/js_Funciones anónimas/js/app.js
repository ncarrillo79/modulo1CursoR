'use strict';

//********************************
//*** Función Anonima

/*(
    function(){
        var mensaje = "Hola de nuevo";
        console.log(mensaje);
    }
)()*/

var saludar = function () {
  var mensaje = 'Hola ' + nombre;

  return mensaje;
};

//**************************************** */

// function somar(n1, n2, multiplicar) {
//   var suma = n1 + n2;
//   multiplicar(suma);
//   return suma;
// }
//al invocar la funcion queda así:
// somar(5, 7, function (d) {
//   console.log(`a soma é ${d}`);
//   console.log(`a multiplicação e: ${d * 2}`);
// });

//******************************

// const saludo = function () {
//   console.log('hola mundo');
// };

// saludo();

//*************************** */

// //*protegemos de acesso aos dados desde o navegador/
// var sobrenome = 'carrillo';
// (function () {
//   var nome = 'norma';
// })();
