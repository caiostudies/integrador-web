document.getElementById("checkout-btn").addEventListener("click", function() {
            // Simulando a conclusão da compra
            alert("Compra concluída com sucesso!");
          
            // Limpando o carrinho de compras
            document.getElementById("cart-items").innerHTML = "";
          });