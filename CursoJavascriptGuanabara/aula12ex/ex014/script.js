function carregar() {
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;

  var hora = 20;
  if (hora >= 0 && hora <= 12) {
    //BOM DIA!
    img.src = 'manhã.png';
    document.body.style.background = '#e2cd9f';
  } else if (hora >= 12 && hora < 18) {
    //Boa TARDE!
    img.src = 'tarde.png';
    document.body.style.background = '#b9846f';
  } else {
    //BOA NOITE!
    document.body.style.background = '#515154';
    img.src = 'noite.png';
  }
}
