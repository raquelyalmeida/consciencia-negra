/* script.js */

// Array de curiosidades sobre Léa Garcia
const curiosidades = [
    "Léa Garcia foi indicada ao prêmio de Melhor Atriz no Festival de Cannes em 1957 pelo filme 'Orfeu Negro', uma coprodução franco-ítalo-brasileira que ganhou o Oscar de Melhor Filme Estrangeiro.",
    "Ela começou sua carreira no Teatro Experimental do Negro (TEN) em 1952, a convite de Abdias Nascimento, atuando na peça 'Rapsódia Negra'.",
    "Sua personagem mais conhecida na televisão foi a vilã **Rosa** na primeira versão da novela 'A Escrava Isaura' (1976), um papel que a tornou famosa internacionalmente.",
    "Léa Garcia recebeu o prêmio de Melhor Atriz no Festival de Gramado em 2004, por sua atuação no filme 'As Filhas do Vento'.",
    "Ela era muito mais do que apenas uma atriz, sendo também uma importante ativista social e uma voz contra o racismo no Brasil."
];

// Função para selecionar e exibir uma curiosidade aleatória
function mostrarCuriosidade() {
    // 1. Encontrar o elemento onde a mensagem será exibida
    const mensagemElemento = document.getElementById('curiosidadeMensagem');

    // 2. Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);

    // 3. Obter a curiosidade correspondente
    const curiosidadeSelecionada = curiosidades[indiceAleatorio];

    // 4. Exibir a curiosidade no parágrafo
    mensagemElemento.textContent = curiosidadeSelecionada;

    // Opcional: Adicionar uma classe para estilização temporária ou animação (se o CSS suportar)
    mensagemElemento.classList.add('destaque'); 
    setTimeout(() => {
        mensagemElemento.classList.remove('destaque');
    }, 5000); // Remove o destaque após 5 segundos
}

// 5. Adicionar um 'EventListener' ao botão para chamar a função quando for clicado
document.getElementById('curiosidadeBtn').addEventListener('click', mostrarCuriosidade);

// Opcional: Chamar a função uma vez para exibir uma curiosidade logo que a página carregar
// mostrarCuriosidade();