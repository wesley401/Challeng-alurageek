const telaLogin = document.querySelector('[data-login]')
const telaAddProdutos = document.querySelector('[data-adiciona-produto]')

telaLogin.addEventListener('click', () => {

    window.location.href = "login.html";
})
telaAddProdutos.addEventListener('click', (event) => {
    event.preventDefault()

    window.location.href = "adicionar-produto.html";
})