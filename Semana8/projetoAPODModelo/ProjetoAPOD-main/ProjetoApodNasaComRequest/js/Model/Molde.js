class Molde {
    constructor(data) {
        this.data
        if (data !== undefined) {
            this.data = data
        }
        this.titulo = " "
        this.imagem = ""
        this.texto = ""
    }
    pegaDados() {

        let request = new XMLHttpRequest(); //criei a request
        request.addEventListener('load', () => {
            if (request.status == 200) {
                let dadosGuardados = this.processaDados(request.responseText)
                this.atualizaDados(dadosGuardados)
            }
        })
        let chave = "qcPijd0faCCqD2tFcev5nSLzXm77mzwsNBFI47q7"
        let dataEScrita = this.data
        request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=${chave}&date=${dataEScrita}`, false)

        request.send();
    }
    processaDados(x) {
        let response = JSON.parse(x);
        return response
    }
    atualizaDados(x) {
        this.data = x.date
        this.titulo = x.title
        this.imagem = x.hdurl
        this.texto = x.explanation
    }

    getData() {
        return this.data
    }

    getTitulo() {
        return this.titulo
    }

    getTexto() {
        return this.texto
    }
    getImagem() {
        return this.imagem
    }
}