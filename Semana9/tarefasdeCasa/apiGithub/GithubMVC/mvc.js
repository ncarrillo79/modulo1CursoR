class UserController {
  //Também não precissamos de propiedades nessa controller
  //criamos a nossa controller (precisamos de um ponto de entrada)
  //controlador (controller de um usuário)
  constructor() {
    console.log('Controller fui criada!');
  }

  //Função chamada queremos adicionar um usuário

  adicionaUsuario() {
    console.log('Vou adicionar um usuario...!');

    //Criamos uma model e buscamos dados

    let user = new UserModel();
    user.buscaUsuario();

    //Passar os dados para a view

    let view = new UserView();
    view.render(user);
  }
}
//Modelo(Model). buscar , armazena e processa dados
class UserModel {
  //Definir propriedades do objeto
  constructor() {
    console.log('Model:fui criada');

    this._nome = '';
    this._imagem = '';
    this._DatadeCriacao = '';
  }

  //buscar usuário na API

  buscaUsuario() {
    console.log('Model:Buscando um Usuário...');

    //cria request
    let pedido = new XMLHttpRequest();

    //o que fazer quando a resposta chegar

    pedido.addEventListener('load', () => {
      //se o status da resposta é ok
      if (pedido.status == 200) {
        //processar dados de pedido
        let dados = this._processaResponse(pedido.responseText);
        this._atualiza(dados);
      }
    });

    //configurapedido para buscar de forma síncrona os dados da API

    pedido.open('GET', 'https://api.github.com/users/ncarrillo79', false);

    //enviamos o pedido(request)
    pedido.send();

    //a resposta vem como string, precissamos
    //processa esses dados para trabalhar com eles
  }
  _processaResponse(responseText) {
    console.log('Model:Processando response...');

    let response = JSON.parse(responseText);

    return response;

    console.log(response);

    //return response={name,avatar_url,created_at}
    //return {name, avatar_url,created_at}
    //console.log(
    //`${response.name}  "tiene" ${response.public_repos}" repositorios públicos`
    //);
  }

  //Atualizamos os dados da nossa model de acordo com os
  //dados da response da API

  _atualiza(dados) {
    console.log('Model:Atualizando os  dados');

    this._nome = dados.name;
    this._imagem = dados.avatar_url;
    this._datadeCriacao = dados.created_at;
  }

  //Metodo para devolver o nome do usuário

  getNome() {
    return this._nome;
  }

  //Metodo para devolver a imagem do usuário

  getImagem() {
    return this._imagem;
  }

  getDatadeCriacao() {
    return this._datadeCriacao;
  }

  //Sua função é ser o ponto de entrada da plataforma e mediar as models e
}
//Visualização (view) de um usuário
//Sua função é lidar com a diponibilização de dados
class UserView {
  //Conxtrutor vazio: nossa view não tem atributos!

  constructor() {
    console.log('View: Fui criada');
  }
  // Método encarregado de pegar os dados da model de usuário
  //e mostrar na tela

  render(model) {
    console.log('View:Recebi o usuário e vou criar uma visualização');

    //criar uma div
    let card = document.createElement('div');

    //colocamos foto e nome

    card.innerHTML = `<img src=${model.getImagem()}>
                      <p>${model.getNome()}</p>;
                      <p>${model.getDatadeCriacao()}</p>`;

    //adicionamos a div a nosso documento
    document.body.appendChild(card);
  }
}

let controller = new UserController();

//lidamos com o imput do lado de fora:

document
  .getElementById('busca')
  .addEventListener('click', controller.adicionaUsuario);
