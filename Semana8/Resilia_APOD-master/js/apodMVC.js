class UserModel {
    constructor() 
    {
        console.log('Model foi criada!')

        this._date = busca.value;
        this._title = '';
        this._image = '';
        this._explanation = '';
    }

    buscaImagem()
    {
        console.log('Model buscando imagem...')

        let request = new XMLHttpRequest();

        request.open( 'GET', 'https://api.nasa.gov/planetary/apod?api_key=ECpoRsNJWK3SQxK9HfxJQcXii7ZCh7YXxaaffIg0&date=' + this._date, false);

        //request.setRequestHeader('Authorization', 'ECpoRsNJWK3SQxK9HfxJQcXii7ZCh7YXxaaffIg0', false)

        request.addEventListener('load', () =>
        {
            if ( request.status == 200 )
            {
               let dados = this._processaResponse( request.responseText );

               this._atualiza( dados )
            }
        })

        request.send();

        console.log(request);
    }

    _processaResponse( responseString )
    {
        console.log( 'Model está processando response' );

        let response = JSON.parse ( responseString );

        return response;

    }

    _atualiza ( dados )
    {
        console.log('Model está atualizando os dados.')

        this._date = dados.date;
        this._title = dados.title;
        this._image = dados.url;
        this._explanation = dados.explanation;
    }

    getTitle()
    {
        return this._title;
    }

    getDate()
    {
        return this._date;
    }

    getImage()
    {
        return this._image;
    }

    getExplanation()
    {
        return this._explanation;
    }
}

class UserView
{
    constructor() { console.log('View criada!')}

    renderView ( model )
    {
        console.log('View recebendo uma imagem e criando uma visualização.')


        let card = document.createElement('div');
        card.classList = 'corpo';

        card.innerHTML =
        `
            <p>${model.getDate()}</p>
            <img src = ${model.getImage()}>
            <h2>${model.getTitle()}</h2>
            <p>${model.getExplanation()}</p>
        `
        document.body.appendChild( card );
    }
}

class UserController
{
    constructor(){ console.log( 'Controller criado!')}

    adicionaImagem()
    {
        console.log('Controller adicionando uma imagem...')

        let page = new UserModel();
        page.buscaImagem();

        let view = new UserView();
        view.renderView( page )
    }
}

let controller = new UserController();

enviar.addEventListener('click', controller.adicionaImagem);