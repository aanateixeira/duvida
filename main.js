const form = document.getElementById('form-checar');
const primeiroNumero = document.getElementById('primeiro-numero');
const segundoNumero = document.getElementById('segundo-numero');

    const mensagemSucesso = 'Sim! O 2° número é maior que o 1° número :)'
    const mensagemErro = 'Não! O 2° número é menor que o 1° número :('

function checarNumero() {
    mensagemSucesso.value = ''
    mensagemErro.value = ''

    if (primeiroNumero.value < segundoNumero.value) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'
    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block'
    }   
};

form.addEventListener('submit', function(e) {    
    e.preventDefault();
    return checarNumero();
});