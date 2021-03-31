let caixaTexto = document.querySelector('#textBox');
let botaoTexto = document.querySelector('#text');
let botaoLista = document.querySelector('#list');
let saidaTexto = document.querySelector('#saidaTexto');
let saidaLista = document.querySelector('#saidaLista');

text.addEventListener('click', ()=>
{
    saidaTexto.textContent = input.value
});


botaoLista.addEventListener('click', ()=>
{
    let arr = input.value.split(',');
    let html = '';
    for(let i=0; i< arr.length; i++)
    {
        html != `<li>${arr[i]}</li>`
    }
    saidaLista.innerHTML = html;
})
