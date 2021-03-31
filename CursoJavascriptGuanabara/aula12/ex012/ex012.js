var agora = new Date();
var hora = agora.getHours();
var minutes = agora.getMinutes();
//var hora = 8;
console.log(`Agora são ${hora} horas e ${minutes} minutos`);

if (hora < 12) {
  console.log('Bom dia');
} else if (hora <= 18) {
  console.log('boa tarde');
} else {
  console.log('boa noite');
}
