// Ejercicio 138: Uso del método UTC de la clase Date.

console.log(Date.UTC(0, 0, 0, 0, 0, 0));

var utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
var utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

console.log(utcDate1.toUTCString());
// expected output: Fri, 02 Feb 1996 03:04:05 GMT

console.log(utcDate2.toUTCString());
// expected output: Sun, 31 Dec 1899 00:00:00 GMT
