 // Array para armazenar os produtos no carrinho
 var carrinho = [];

 // Função para adicionar um produto ao carrinho
 function adicionarProduto(produto) {
   carrinho.push(produto);
   exibirCarrinho();
 }

 // Função para remover um produto do carrinho
 function removerProduto(index) {
   carrinho.splice(index, 1);
   exibirCarrinho();
 }

 // Função para exibir o carrinho na página
 function exibirCarrinho() {
   var carrinhoElemento = document.getElementById('itens-carrinho');
   carrinhoElemento.innerHTML = '';

   for (var i = 0; i < carrinho.length; i++) {
     var produto = carrinho[i];

     var itemCarrinho = document.createElement('li');
     itemCarrinho.className = 'item-carrinho';
     itemCarrinho.innerHTML = produto + ' <button class="botao botao-remover" onclick="removerProduto(' + i + ')">Remover</button>';

     carrinhoElemento.appendChild(itemCarrinho);
   }
 }