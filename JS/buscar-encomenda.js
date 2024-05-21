var botaoBuscar = document.querySelector("#buscar-encomenda");

botaoBuscar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "htts://localhost:3000/encomenda");
  xhr.addEventListener("load", function(){
    var resposta = xhr .responseText;
    console.log(resposta);
    console.log(typeof resposta0);
        var resposta = xhr.responseText;
        var encomenda = JSON.parse(resposta);

    encomenda.forEach(function(cada_encomenda){
        addEncomenda(cada_encomenda);
    })
  });
    xhr.send();
})