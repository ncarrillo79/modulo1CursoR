var agora = new Date();
var diaSem = agora.getDay();

diaSem = 7;

switch (diaSem) {
  case 0:
    console.log('Domingo');
    break;

  case 1:
    console.log('Segunda');
    break;

  case 2:
    console.log('Terca');
    break;

  case 3:
    console.log('Quarta');
    break;

  case 4:
    console.log('Quinta');
    break;

  case 5:
    console.log('Sexta');
    break;

  case 6:
    console.log('Sábado');
    break;

  default:
    console.log('[Erro] Dia inválido');
}

/*

0= Domingo
1=segunda
2=terça
3=quarta
4=quinta
5=sexta 
6=śábado
*/

console.log(diaSem);
