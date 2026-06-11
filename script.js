// Aguarda todo o documento HTML carregar antes de rodar as animações
document.addEventListener("DOMContentLoaded", function () {

    // ----------------------------------------------------
    // ANIMAÇÃO 1: Entrada suave dos Cards (Efeito Cascata)
    // ----------------------------------------------------

    // Selecionamos todos os elementos com a classe '.card'
    const cards = document.querySelectorAll('.card');

    // Varremos card por card aplicando um atraso de tempo (delay) para cada um
    cards.forEach((card, index) => {
        setTimeout(() => {
            // Adiciona a classe CSS '.mostrar' que ativa a transição suave
            card.classList.add('mostrar');
        }, index * 150); // Multiplica o index para que apareçam um depois do outro (0ms, 150ms, 300ms...)
    });


    // ----------------------------------------------------
    // ANIMAÇÃO 2: Validação e Feedback da Newsletter
    // ----------------------------------------------------

    const btnInscrever = document.getElementById('btn-inscrever');
    const inputEmail = document.getElementById('email-news');

    // Escuta o clique do usuário no botão de inscrição
    btnInscrever.addEventListener('click', function () {
        const emailValor = inputEmail.value.trim();

        // Verificação simples se o campo não está vazio
        if (emailValor === "") {
            // Pequena animação nativa alertando o erro
            inputEmail.style.border = "2px solid #ff4757";
            alert("Por favor, introduza um e-mail válido!");
        } else {
            // Efeito visual de sucesso: altera o estilo e texto dinamicamente
            inputEmail.style.border = "2px solid #25D366";
            btnInscrever.style.backgroundColor = "#25D366";
            btnInscrever.style.color = "#ffffff";
            btnInscrever.innerText = "✓ Inscrito!";

            // Mensagem amigável de sucesso
            alert(`Obrigado! Enviamos as ofertas para: ${emailValor}`);

            // Limpa o campo
            inputEmail.value = "";
        }
    });
});