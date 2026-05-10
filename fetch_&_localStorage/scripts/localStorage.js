// Função para salvar dados no localStorage
function salvarDados() {
  const dados = {
    cep: $("#cep").val(),
    logradouro: $("#logradouro").val(),
    bairro: $("#bairro").val(),
    cidade: $("#cidade").val(),
    estado: $("#estado").val(),
    numero: $("#numero").val(),
  };

  localStorage.setItem("dadosEndereco", JSON.stringify(dados));
  console.log("Dados salvos:", dados); // Para debug
}

// Função para carregar dados do localStorage
function carregarDados() {
  const dadosSalvos = localStorage.getItem("dadosEndereco");
  if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);
    $("#cep").val(dados.cep || "");
    $("#logradouro").val(dados.logradouro || "");
    $("#bairro").val(dados.bairro || "");
    $("#cidade").val(dados.cidade || "");
    $("#estado").val(dados.estado || "");
    $("#numero").val(dados.numero || "");
    console.log("Dados carregados:", dados); // Para debug
  }
}

// Aguarda o DOM carregar
$(document).ready(function () {
  // Salvar dados automaticamente ao alterar qualquer input
  $("input").on("input", function () {
    salvarDados();
  });

  // Também salvar no submit
  $("form").on("submit", function (event) {
    event.preventDefault();
    salvarDados();
    alert("Dados salvos com sucesso!");
  });

  // Carregar dados ao carregar a página
  carregarDados();
});