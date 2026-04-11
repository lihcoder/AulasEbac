// calculadora IMC usando jQuery

// função criada
$(document).ready(function() {
    // pega pelo id e adiciona o evento de click
    $('#calcularIMC').on('click', function() {
        // declara como constante o peso, altura e resultado do IMC, ao mesmo tempo que pega os valores dos inputs pelo id ressaltando que é um valor e converte para float 
        const peso = parseFloat($('#peso').val());
        const altura = parseFloat($('#altura').val());
        const calculadoIMC = peso / (altura * altura);

        // pega o id da minha tag p e escreve dentro dela o resultado do calculo do IMC + textinho, usando o método toFixed para limitar a 2 casas decimais
        $('#valorCalculado').text('Sua Massa Corporal é: ' + calculadoIMC.toFixed(2));

        //declaro como variavel classificação, pq como variavel? Pq ela vai receber um valor diferente dependendo do resultado do calculo do IMC
        let classificacao = '';
        if (calculadoIMC < 18.5) {
            classificacao = 'Classificação: Abaixo do peso';
        } else if (calculadoIMC >= 18.5 && calculadoIMC < 25) {
            classificacao = 'Classificação: Peso normal';
        } else if (calculadoIMC >= 25 && calculadoIMC < 30) {
            classificacao = 'Classificação: Sobrepeso';
        } else {
            classificacao = 'Classificação: Obesidade';
        }

        // e depois escrevo o valor da classificação dentro da tag p com id classificacaoIMC
        $('#classificacaoIMC').text(classificacao);
    });
});