const form = document.getElementById('form-atividade');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeUsuario = document.getElementById('nome-usuario');
    const inputTelefone = document.getElementById('numero-telefone');
    const inputEmail = document.getElementById('email-usuario');

    

    let linha = '<tr>';
    linha += `<td>${inputNomeUsuario.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `<td>${inputEmail.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

})