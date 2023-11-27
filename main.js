// limpa caixa de texxto de pesquisa main.js

function limparTextoPadrao() {
  var caixaPesquisa = document.getElementById("Pesquisar");
  if (caixaPesquisa.value === "Produtos, serviços, lojas, etc...") {
      caixaPesquisa.value = "";
  }
}
