const form = document.getElementById('form');
const username = document.getElementById('validationCustomName');
const senha = document.getElementById('validationCustomSenha');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
});

function checkInputs() {

    const usernameValue = username.value.trim()
    const senhaValue = senha.value.trim()

    if(usernameValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(username)
    }
   
    if(senhaValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(senha, 'Preencha esse campo')

    } else if(senhaValue.length < 6) { 
        setErrorFor(senha, 'Senha deve ter mais que 6 caracteres')
    }else {
        // adicionar a classe de sucesso
        setSuccessFor(senha)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}