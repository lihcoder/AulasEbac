//1. Primeiro preciso ouvir o evento de quando o usuário sai do campo de CEP
$("#cep").on("blur", function() {
    //o que é o blur? é o evento de quando o usuário sai do campo.
    const cepInformado = $(this).val();
    // o que é o $(this).val()? o $(this) é uma forma de selecionar o elemento que disparou o evento,
    //  ou seja, o campo de CEP. E o .val() é para pegar o valor do campo.

    //2. Vamos validar esse CEP
    if (cepInformado.length !== 8) return;

    //3. Fazer a busca do endereço usando a API ViaCEP
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        // Processamento dos dados recebidos da API
        .then(data => {
            if (!data.erro) {
                $("#logradouro").val(data.logradouro);
                $("#bairro").val(data.bairro);
                $("#cidade").val(data.localidade);
                $("#estado").val(data.uf);
            } else {
                alert("CEP não encontrado. Por favor, verifique o número e tente novamente.");
            }
        })
        .catch(error => console.error("Erro ao buscar o CEP:", error));
});