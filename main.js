// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('btn-buscar-cep').addEventListener('click', () => {
//         //AJAX - Asynchronous JavaScript and XML
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endpoint);
//         xhttp.send()
    
//     })
// })

$(document).ready(() => {
    $('#btn-buscar-cep').click(() => { 
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        $.ajax(endpoint).done((resposta) => {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`

            $('#endereco').val(endereco)
        })
    })
})