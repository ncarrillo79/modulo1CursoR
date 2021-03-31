class Controlar {
    constructor() {}
    adicionar() {
        var date = document.getElementById('date')
        let modelagem = new Molde(date.value);
        console.log("aqui", modelagem.getData())
        let visualiza = new Visualiza();
        console.log("esse", modelagem.pegaDados())
        console.log("passando", visualiza.renderizaPagina(modelagem))
    }

}

var botao = document.getElementById('botao')
let cont = new Controlar()
botao.addEventListener('click', cont.adicionar)