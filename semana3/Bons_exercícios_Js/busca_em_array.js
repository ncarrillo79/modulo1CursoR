
/*
*Buscando e contando dados em arrays

-contar o número de categorias e o número de livros em cada categoria
-contar o número de autores
-Mostrar livros do Autor Cury
-Transformar a função acima em uma fução que irá receber o nome do autor e
devolver os livros desse autor
*/

const booksByCategory = [

    {
        category:"Riqueza",
        books :[
            {
                title: "Os segredos da mente milionaria",
                author: "Harv Eker",
            },
            {
                title: "O homem mais rico da Babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Letcher",
            },
        ],

    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author:"Stephen R. Covey",
            }
        ],
    },


];

const totalCategorias =booksByCategory.length
console.log('Total categorias: ' + totalCategorias)

for (let categoria of booksByCategory) {
   console.log('Total de livros da categoria', categoria.category)
    console.log(categoria.books.length)
}

function countAuthors(){
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: " , authors.length)
}

countAuthors();

function booksOfAugustoCury(){
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }
    console.log("Livros do Autor: " , books)
}

booksOfAugustoCury()


function booksOfAuthor(author){
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor("Augusto Cury")