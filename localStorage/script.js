// aqui estamos inicialmente recuperando o tema salvo, pq vamos salvar
// o tema quando o usuário clicar no botão de troca
const temaSalvo = localStorage.getItem("tema");

// Se o tema salvo for dark, aplicar a classe dark ao body
if (temaSalvo === "dark") {
    $("body").addClass("dark");
}

// Evento do botão de troca de tema
$("#toggle-theme").on("click", function() {
    // o que é o toggleClass? é um método do jQuery que adiciona 
    // ou remove uma classe de um elemento, dependendo se ela 
    // já está presente ou não. No caso, estamos alternando
    // a classe "dark" no body.
    $("body").toggleClass("dark");

    // Verifica se o dark mode está ativo e salva no localStorage
    const darkModeAtivo = $("body").hasClass("dark");
    // pq ? "dark" : "light"? é uma forma de salvar o tema atual 
    // no localStorage. Se o dark mode estiver ativo, salva "dark", 
    // caso contrário, salva "light".
    localStorage.setItem("tema", darkModeAtivo ? "dark" : "light");
});

//pq verifico se o tema é dark e adiciono a classe dark no
// inicio e dentro da função faço de novo isso com o 
// toggleClass? Porque no início do script, queremos aplicar o tema salvo quando a página for carregada. Já dentro da função de clique, queremos alternar o tema quando o usuário clicar no botão. Então, são duas situações diferentes: uma para aplicar o tema salvo e outra para alternar o tema quando o usuário interage com o botão.