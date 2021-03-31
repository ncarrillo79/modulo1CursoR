class Controller
{
    constructor(){}

    static carregaInfos(id)
    {
        let pedido = new XMLHttpRequest()

        pedido.open('GET', `https://swapi.dev/api/starships/${id}`, false)

        pedido.addEventListener('load', ()=>
        {
            try {
                if(pedido.status !=200){
                    throw new Error('requisição zoada')
                }
                let dados = JSON.parse(pedido.responseText)

                View.carregaPagina( dados )

            } catch (error) {
                button.style.backgroundColor = 'green'
            }

        })

        pedido.send()
    }
}