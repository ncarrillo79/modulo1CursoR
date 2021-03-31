let button = document.querySelector('#btn')

let input = document.querySelector('#inputNaveID')

button.addEventListener('click', ()=>
{
    Controller.carregaInfos(input.value)
})