var botaoAdicionar=documento.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    //Captura os dados do formulário
    var form = documento.querySelector('#form-adicionar')
});
//Função para capturar os dados da encomenda 
function obtemEncomenda(dadosForm){

    var encomenda = {
       nome: dadosForm.nome.value,
       qtde: dadosForm.qtde.value,
       produto: dadosForm.produto.value,
       unitario: dadosForm.unitario.value,

    }
    return encomenda;

    function addEncomenda(dadosEncomenda){
         
    }
}