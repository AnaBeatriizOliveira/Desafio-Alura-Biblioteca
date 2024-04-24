echo "# Desafio-Alura-Biblioteca" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/AnaBeatriizOliveira/Desafio-Alura-Biblioteca.git
  git push -u origin main

var listaLivros = [];

function Adicionar() {
  var resultadoElemento = document.getElementById("resultado");
  var linkLivro = document.getElementById("capa").value;

  if (listaLivros.includes(linkLivro)) {
    alert("Você ja incluiu esse livro.");
  } else {
    listaLivros.push(linkLivro);
    var quantidade = listaLivros.length;
    resultadoElemento.innerHTML =
      resultadoElemento.innerHTML +
      "<img src=" +
      listaLivros[quantidade - 1] +
      ">";
  }
}
