// Espera o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o botão e o parágrafo onde a curiosidade será exibida
    const botaoCuriosidade = document.getElementById("curiosidadeBtn");
    const mensagemCuriosidade = document.getElementById("curiosidadeMensagem");

    // Cria uma lista de curiosidades sobre Léa Garcia
    const curiosidades = [
        "Léa Garcia foi a primeira atriz brasileira indicada à Palma de Ouro no Festival de Cannes, por sua atuação em 'Orfeu Negro' (1959).",
        "Antes de se tornar atriz, Léa Garcia estudou secretariado e trabalhou como datilógrafa.",
        "Ela participou do Teatro Experimental do Negro, grupo criado para valorizar artistas negros no Brasil.",
        "Além de atriz, Léa também foi ativista e defensora dos direitos da população negra no país.",
        "Sua carreira teve mais de 70 anos de dedicação às artes — um marco na história da dramaturgia brasileira."
    ];

    // Adiciona o evento de clique no botão
    botaoCuriosidade.addEventListener("click", function() {
        // Escolhe uma curiosidade aleatória da lista
        const curiosidadeAleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];

        // Exibe a curiosidade no parágrafo
        mensagemCuriosidade.textContent = curiosidadeAleatoria;

        // Estiliza a mensagem (opcional)
        mensagemCuriosidade.style.fontStyle = "italic";
        mensagemCuriosidade.style.marginTop = "10px";
    });
});

