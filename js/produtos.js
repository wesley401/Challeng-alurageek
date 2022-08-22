const novoProduto =  document.querySelector('[data-produto-novo]')

const Produtos =() => {
    const produtos = JSON.parse(localStorage.getItem('item')) || []

    const Lista = ({ valorUrl, valorNome, valorPreco })=> {
        const criaLista = document.createElement('li')
        criaLista.classList.add('produtos__item')
     

    const conteudo = `
    <img class="produtos__imagens" src="${valorUrl}">
    <p>${valorNome}</p>
    <p class="produtos__preco">R$${valorPreco},00</p>
    <a class="produtos__item-excluir" data-produto-excluir><img src="../assets/imagens/excluir.png"></a>
    <a class="produtos__item-editar" data-produto-editar><img src="../assets/imagens/editar.png" ></a>
    <a class="produtos__link-item" >Ver produto</a>`

    criaLista.innerHTML = conteudo

    return criaLista
    }

     
    produtos.forEach((criaLista) => {
        novoProduto.appendChild(Lista(criaLista))
    });
}
   


