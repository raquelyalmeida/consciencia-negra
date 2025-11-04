// script.js

// Espera o conteúdo da página carregar
document.addEventListener("DOMContentLoaded", function() {
    
    // Pega os elementos do HTML
    const botao = document.getElementById("curiosidadeBtn");
    const mensagem = document.getElementById("curiosidadeMensagem");

    // Lista de curiosidades simples
    const curiosidades = [
        "Léa Garcia foi indicada ao Festival de Cannes pelo filme 'Orfeu Negro' (1959).",
        "Ela começou sua carreira no Teatro Experimental do Negro.",
        "Participou de mais de 30 novelas e séries brasileiras.",
        "Foi uma das primeiras atrizes negras a ganhar destaque na TV brasileira.",
        "Em 2023, seria homenageada no Festival de Gramado, mas faleceu no mesmo dia."
    ];

    // Ao clicar no botão
    botao.addEventListener("click", function() {
        // Sorteia uma curiosidade aleatória
        const indice = Math.floor(Math.random() * curiosidades.length);
        const curiosidadeEscolhida = curiosidades[indice];

        // Mostra no parágrafo
        mensagem.textContent = curiosidadeEscolhida;
        mensagem.style.color = "#0077cc"; // Combina com o CSS
        mensagem.style.fontWeight = "bold";
    });
});
