//Captura todas as encomendas
var clientes = document.querySelectorAll(".cliente");


for (var count = 0; count < clientes.length; count++) {
    var qtde = clientes[count].querySelector(".quant").textContent;
    var unitarioText = clientes[count].querySelector(".unit").textContent;
    var unitario = clientes[count].querySelector(".unit").textContent;
    if (!validaQTDE(qtde)) {
        qtdeInvalida(clientes[count]);
    } else if (!validaUNI(unitario)) {
        valorInvalido(clientes[count]);
    }
    else {
        calcularTotalEncomenda(clientes[count], qtde, unitario);
    }
}


//Função para o cálculo do valor total
function calculaTotal(qtdeEncomenda, unitarioProduto) {
    var total = 0;

    total = qtdeEncomenda * unitarioProduto;

    return formataValor(total);
}

function validaUNI(valor){
    if(valor < 1 || isNaN(valor)){
        return false
    }else{
        return true
    }
}

function validaQTDE(valor){
    if(valor<1 || isNaN(valor)){
        return false
    }else{
        return true
    }
    }


function formataValor(valor) {
    return parseFloat(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function qtdeInvalida(cliente) {

    cliente.querySelector(".quant").textContent = "QTDE INVÁLIDA!";
    cliente.querySelector(".quant").style.color = "red";
    
    
}

// Função para marcar valor inválido
function valorInvalido(cliente) {
    cliente.querySelector(".unit").textContent = "VALOR INVÁLIDO!";
    // Puxando a cor vermelha por uma classe no css
    clientes[count].classList.add("info-invalida");
}

// Função para calcular o valor total da encomenda
function calcularTotalEncomenda(cliente, qtde, unitario) {
    cliente.querySelector(".unit").textContent = formataValor(unitario)
    cliente.querySelector(".tot").textContent = calculaTotal(qtde, unitario);
}

document.addEventListener("DOMContentLoaded", function() {
    var linhas = document.querySelectorAll("#tabela-cliente tr");
    linhas.forEach(function(linha) {
        linha.addEventListener("dblclick", function() {
            this.remove();
        });
    });
});


