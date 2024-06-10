document.addEventListener("DOMContentLoaded", function() {
  var botaoBuscar = document.querySelector("#buscar-encomendas");

  botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/encomendas");
    xhr.addEventListener("load", function() {
      var resposta = xhr.responseText;
      var encomendas = JSON.parse(resposta);

      encomendas.forEach(function(cada_encomenda) {
        adicionarEncomendaNaTabela(cada_encomenda);
      });
    });
    xhr.send();
  });
});

function adicionarEncomendaNaTabela(encomenda) {
  // Verifica se o elemento com o ID 'tabela-cliente' existe
  var tabelaCliente = document.getElementById('tabela-cliente');

  if (!tabelaCliente) {
      // Se não existir, cria um elemento tbody dentro da tabela
      tabelaCliente = document.createElement('tbody');
      tabelaCliente.id = 'tabela-cliente';
      document.querySelector('table').appendChild(tabelaCliente);
  }

  // Cria uma nova linha para a tabela
  var novaLinha = document.createElement('tr');

  // Cria células para cada dado da encomenda
  var celulaNome = document.createElement('td');
  celulaNome.textContent = encomenda.nome;
  novaLinha.appendChild(celulaNome);

  var celulaProduto = document.createElement('td');
  celulaProduto.textContent = encomenda.produto;
  novaLinha.appendChild(celulaProduto);

  var celulaQuantidade = document.createElement('td');
  celulaQuantidade.textContent = encomenda.quantidade;
  novaLinha.appendChild(celulaQuantidade);

  var celulaValorUnitario = document.createElement('td');
  if (typeof encomenda.valorUnitario === 'number') {
  celulaValorUnitario.textContent = 'R$ ' + encomenda.valorUnitario.toFixed(2);
  } else {
  celulaValorUnitario.textContent = 'Valor inválido';
  }
novaLinha.appendChild(celulaValorUnitario);

  var celulaTotal = document.createElement('td');
  celulaTotal.textContent = 'R$ ' + (encomenda.quantidade * encomenda.valorUnitario).toFixed(2);
  novaLinha.appendChild(celulaTotal);

  // Adiciona a nova linha à tabela
  tabelaCliente.appendChild(novaLinha);
}
