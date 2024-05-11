document.addEventListener("DOMContentLoaded", function() {
    var botaoEnviar = document.querySelector('.box button[type="submit"]');
    botaoEnviar.addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        var nome = document.getElementById("nome").value;
        var quantidade = document.getElementById("email").value;
        var produto = document.getElementById("produto").value;
        var valorUnitario = parseFloat(document.getElementById("valor_unitario").value); // Convertendo para número

        // Formatando o valor unitário como moeda
        var valorUnitarioFormatado = valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        var tabela = document.getElementById("tabela-cliente");
        var novaLinha = tabela.insertRow();
        var colunaNome = novaLinha.insertCell(0);
        var colunaProduto = novaLinha.insertCell(1);
        var colunaQuantidade = novaLinha.insertCell(2);
        var colunaValorUnitario = novaLinha.insertCell(3);
        var colunaTotal = novaLinha.insertCell(4);

        colunaNome.innerHTML = nome;
        colunaProduto.innerHTML = produto;
        colunaQuantidade.innerHTML = quantidade;
        colunaValorUnitario.innerHTML = valorUnitarioFormatado; // Inserindo valor formatado
        colunaTotal.innerHTML = (quantidade * valorUnitario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // Formatando o total também
    });
});
