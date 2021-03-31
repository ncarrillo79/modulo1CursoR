//***********TESTANDO QUE A REQUISIÇÃO TA CERTA**********
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/ncarrillo79');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.responseText));
//   }
// };

let botao = document.createElement('button');
botao.innerHTML = 'Pesquise Aqui';
document.body.append(botao);

let conteudo = document.querySelector('#conteudo'); //pegamos la div conteudo

let informacoes = document.createElement('p'); //creamos un parágrafo con las informacoes dos user y...
conteudo.appendChild(informacoes); //agregamos el paragrafo a la div conteudo

botao.addEventListener('click', function () {
  let pedido = new XMLHttpRequest();

  pedido.onreadystatechange = function (dados) {
    if (this.status == 200 && this.readyState == 4) {
      var objeto = JSON.parse(this.responseText); //transforma o objeto JASON desarrumado em um objeto legível
      let imagem = objeto.avatar_url; //pegamos do JSON a forma do formato foto
      let $foto = document.querySelector('#imgPerfil'); //trazemos do HTML a id da imagem
      $foto.src = imagem; // utilizamos o metodo src do DOM para renderizar a imagem

      informacoes.innerHTML = `Nome: ${objeto.name}<br>Usuario: ${objeto.login}<br>Data de Criação:${objeto.created_at}<br>objeto.repos_url`;
      //nesta linha estamos colocando o formato  ao paragrafo informações dos user que vão aparecer dentro  dentro da div conteudo

      console.log(objeto);
    }
  };

  pedido.open('GET', 'https://api.github.com/users/ncarrillo79', false);

  pedido.send();
});
