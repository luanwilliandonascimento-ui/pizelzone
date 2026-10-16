function comprarProduto(nome, preco, imagem) {
    const params = new URLSearchParams();
    params.append('nome', nome);
    params.append('preco', preco);
    params.append('imagem', imagem);
    window.location.href = 'resumo.html?' + params.toString();
}

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');
    const preco = params.get('preco');
    const imagem = params.get('imagem');

    const elementoNome = document.getElementById('nome-item');
    
    if (elementoNome && nome && preco) {
        document.getElementById('nome-item').innerText = nome;
        document.getElementById('preco-item').innerText = preco;
        document.getElementById('subtotal-item').innerText = preco;

        const elementoFoto = document.getElementById('foto-item');
        if (elementoFoto && imagem) {
            elementoFoto.src = imagem;
        }

        let precoLimpo = preco.replace(/\./g, '').replace(',', '.').replace(/[^\d.]/g, '');
        let valorNumerico = parseFloat(precoLimpo) || 0;
        let total = valorNumerico + 20;

        document.getElementById('total-item').innerText = total.toLocaleString('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
        });

        const botaoFinalizar = document.getElementById('botao-finalizar');
        if (botaoFinalizar) {
            botaoFinalizar.addEventListener('click', function() {
                window.location.href = 'sucessocompra.html?' + params.toString();
            });
        }
    }

    const elementoNomeSucesso = document.getElementById('nome-sucesso');
    if (elementoNomeSucesso && nome) {
        elementoNomeSucesso.innerText = nome;
        
        const elementoFotoSucesso = document.getElementById('foto-sucesso');
        if (elementoFotoSucesso && imagem) {
            elementoFotoSucesso.src = imagem;
        }
    }
});