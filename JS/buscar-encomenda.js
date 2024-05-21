var botaoBuscar = document.querySelector("#buscar-encomenda");

botaoBuscar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "htts://localhost:3000/encomendas");
  xhr.addEventListener("load", function(){
    var resposta = xhr .responseText;
    console.log(resposta);
    console.log(typeof resposta0);
  })

})