$("#cep").on("blur", function () {
  const cepInformado = $(this).val();

  if (cepInformado.length !== 8) return;

  fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then((response) => response.json())
    // Processamento dos dados recebidos da API
    .then((data) => {
      if (!data.erro) {
        $("#logradouro").val(data.logradouro).trigger("input");
        $("#bairro").val(data.bairro).trigger("input");
        $("#cidade").val(data.localidade).trigger("input");
        $("#estado").val(data.uf).trigger("input");
      } else {
        alert(
          "CEP não encontrado. Por favor, verifique o número e tente novamente.",
        );
      }
    })
    .catch((error) => console.error("Erro ao buscar o CEP:", error));
});
