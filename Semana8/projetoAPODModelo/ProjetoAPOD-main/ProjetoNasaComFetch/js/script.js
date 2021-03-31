var data = document.getElementById('h1')
var texto = document.getElementById('texto')
var titulo = document.getElementById('h2')
var imagem = document.getElementById('imagem')
var botao = document.getElementById('botao')
var date = document.getElementById('date')


botao.addEventListener('click', function() {
    var dataEscrita = date.value
    var key = "RXyz0ptUltztZHisBA1A9eZRkPuDnQwRzcoNmV7z"
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${dataEscrita}`)

    .then(function(res) {
        return res.json()
    })

    .then(function(res) {
        data.innerHTML = res.date
        titulo.innerHTML = res.title
        imagem.innerHTML = ` <img src="${res.hdurl}" alt="" class="imagem">`
        texto.innerHTML = res.explanation;


    })

})