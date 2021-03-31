class Visualiza {

    constructor() {}

    renderizaPagina(x) {
        console.log("rederiza a pagina")
        var data = document.getElementById('h1')
        var texto = document.getElementById('texto')
        var titulo = document.getElementById('h2')
        var imagem = document.getElementById('imagem')





        var dat = x.getData()

        console.log("minha dat", data.innerHTML = dat)
        titulo.innerHTML = x.getTitulo()
        imagem.innerHTML = ` <img src="${x.getImagem()}" alt="" class="imagem">`
        texto.innerHTML = x.getTexto();

    }
}