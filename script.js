function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
document.write("<img src =" + filmeFavorito + ">")
  var filmeFavorito = campoFilmeFavorito.value
listarFilmesNatela(filmeFavorito)
  if(filmeFavorito.endswith(".jpg")){
    listarFilmesNaTela(filmeFavorito)
  } else {
    alert("Imagem invalida")
  }
   campoFilmeFavorito.value= ""
}

 function listarFilmesNaTela(filme) {
   var listaFilmes = document.querySelector("listaFilmes")
   var elementoFilme = " < img src = " + filme+ ">"
 listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
 }