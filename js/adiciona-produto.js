const adicionaProduto = document.querySelector('[data-produto-adiciona]')
const recebeUrl = document.querySelector('[data-produto-url]')
const recebeCategoria = document.querySelector('[data-produto-categoria]')
const recebeNome = document.querySelector('[data-produto-nome]')
const recebePreco = document.querySelector('[data-produto-preco]')
const recebeDescricao = document.querySelector('[data-produto-descricao]')


const adicionaInput = (dados) => {
    const item = JSON.parse(localStorage.getItem('item')) || []
    const itensAtualizados = [...item, dados]
    localStorage.setItem("item", JSON.stringify(itensAtualizados))
}

adicionaProduto.addEventListener('click', function(e){
    e.preventDefault()
    const valorUrl = recebeUrl.value
    const valorCategoria = recebeCategoria.value
    const valorNome = recebeNome.value
    const valorPreco = recebePreco.value
    const valorDescricao = recebeDescricao.value
    const dados = {
        valorUrl,
        valorCategoria,
        valorNome,
        valorPreco,
        valorDescricao
    } 
    console.log(dados)
    adicionaInput(dados)
   
    recebeUrl.value = ""
    recebeCategoria.value = ""
    recebeNome.value = ""
    recebePreco.value = ""
    recebeDescricao.value = ""
} )