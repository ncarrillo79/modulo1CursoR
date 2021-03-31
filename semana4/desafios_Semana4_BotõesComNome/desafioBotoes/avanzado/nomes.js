var app = document.getElementById('app');
var listElement = app.querySelector('ul');
var inputElement = app.querySelector('input');
var buttonElement = app.querySelector('button');

//var nomes = ['erica', 'thome', 'vinicius', 'norma'];
var nomes = JSON.parse(localStorage.getItem('list_nomes')) || [];

function renderNomes() {
  listElement.innerHTML = '';
  for (nome of nomes) {
    var nomeElement = document.createElement('li');
    var nomeText = document.createTextNode(nome);

    var linkElement = document.createElement('a');
    var linkTex = document.createTextNode('Excluir');
    linkElement.setAttribute('href', '#');
    var pos = nomes.indexOf(nome);
    linkElement.setAttribute('onclick', 'deleteNome(' + pos + ')');
    linkElement.appendChild(linkTex);

    nomeElement.appendChild(nomeText);
    nomeElement.appendChild(linkElement);

    listElement.appendChild(nomeElement);
  }
}

renderNomes();

function addNome() {
  var nomeText = inputElement.value;
  nomes.push(nomeText);
  inputElement.value = '';
  renderNomes();
  saveToStorage();
}

buttonElement.onclick = addNome;

function deleteNome(pos) {
  nomes.splice(pos, 1);
  renderNomes();
  saveToStorage();
}

function saveToStorage() {
  JSON;
  localStorage.setItem('list_nomes', JSON.stringify(nomes));
}
