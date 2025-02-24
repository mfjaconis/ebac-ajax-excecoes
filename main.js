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

// $(document).ready(() => {
//     $('#cep').mask('00000-000');

//     $('#btn-buscar-cep').click(() => { 
//         const cep = $('#cep').val();
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;
//         const botão = $('#btn-buscar-cep');
//         botão.find('i').addClass('d-none');
//         botão.find('span').removeClass('d-none');

//         $.ajax(endpoint).done((resposta) => {
//             const logradouro = resposta.logradouro;
//             const bairro = resposta.bairro;
//             const cidade = resposta.localidade;
//             const estado = resposta.uf;
//             const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`

//             $('#endereco').val(endereco)
            
//             setTimeout(() => {
//                 botão.find('i').removeClass('d-none');
//                 botão.find('span').addClass('d-none');
//             }, 1000);
//         })
//     })
// })

$(document).ready(() => {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(() => { 
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botão = $('#btn-buscar-cep');
        botão.find('i').addClass('d-none');
        botão.find('span').removeClass('d-none');

        fetch(endpoint).then((resposta) => {
            return resposta.json()
        })
        .then((json) => {
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`
           
            $('#endereco').val(endereco)
        })
        .catch((error) => {
            alert("Ocorreu um erro ao buscar o endereço, tente mais tarde.")
        })
        .finally(() => {
            setTimeout(() => {
                botão.find('i').removeClass('d-none');
                botão.find('span').addClass('d-none');
            }, 1000);
        })
    })

    $('#formulario-pedido').submit((evento) => {
        evento.preventDefault();

        if ($('#nome').val().length === 0){
           throw new Error('Digite o nome')
        }
    })
})