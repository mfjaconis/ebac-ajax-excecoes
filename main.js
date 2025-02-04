document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-buscar-cep').addEventListener('click', () => {
        //AJAX - Asynchronous JavaScript and XML
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send()
    
    })
})