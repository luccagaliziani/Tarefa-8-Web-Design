// O evento DOMContentLoaded garante que nosso script só será executado
// depois que toda a página HTML for completamente carregada.
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================================
    // FUNCIONALIDADE 1: ROLAGEM SUAVE PARA LINKS ÂNCORA
    // Descrição: Faz com que, ao clicar nos links de navegação (Agentes, Mapas, etc.),
    // a página role suavemente até a seção, em vez de pular instantaneamente.
    // =================================================================================
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link (o pulo brusco)
            event.preventDefault();

            // Pega o ID da seção alvo (ex: '#agentes')
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Se a seção existir, rola a página suavemente até ela
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Alinha o topo da seção com o topo da tela
                });
            }
        });
    });


    // =================================================================================
    // FUNCIONALIDADE 2: DESTAQUE NO CARD DE AGENTE AO CLICAR
    // Descrição: Quando o usuário clica em um card de agente, uma borda
    // colorida é adicionada para destacá-lo. Clicar em outro card move o destaque.
    // =================================================================================
    const allAgentCards = document.querySelectorAll('.agent-card');

    allAgentCards.forEach(card => {
        card.addEventListener('click', function() {
            // Primeiro, remove o destaque de todos os outros cards
            allAgentCards.forEach(c => c.classList.remove('highlighted-card'));

            // Adiciona a classe de destaque apenas ao card que foi clicado
            this.classList.add('highlighted-card');
        });
    });


    // =================================================================================
    // FUNCIONALIDADE 3: BOTÃO "VOLTAR AO TOPO" (CRIADO COM JS)
    // Descrição: Cria e adiciona um botão flutuante que aparece quando o usuário
    // rola a página para baixo e o leva de volta ao topo ao ser clicado.
    // =================================================================================
    // Cria o elemento do botão
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '↑';
    backToTopButton.id = 'backToTopBtn'; // Adiciona um ID para estilização
    document.body.appendChild(backToTopButton); // Adiciona o botão ao corpo da página

    // Estiliza o botão diretamente via JavaScript
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '30px';
    backToTopButton.style.right = '30px';
    backToTopButton.style.width = '50px';
    backToTopButton.style.height = '50px';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.backgroundColor = '#FF4655';
    backToTopButton.style.color = 'white';
    backToTopButton.style.border = 'none';
    backToTopButton.style.fontSize = '24px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none'; // Começa escondido
    backToTopButton.style.zIndex = '1000';
    
    // Adiciona o evento de rolagem para mostrar/esconder o botão
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Mostra o botão após rolar 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Adiciona o evento de clique para rolar para o topo
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // =================================================================================
    // FUNCIONALIDADE 4: ATUALIZAÇÃO AUTOMÁTICA DO ANO NO RODAPÉ
    // Descrição: Encontra o parágrafo no rodapé e substitui o ano estático
    // (2025) pelo ano corrente, garantindo que ele esteja sempre atualizado.
    // =================================================================================
    const footerParagraph = document.querySelector('.site-footer .container p');
    if (footerParagraph) {
        const currentYear = new Date().getFullYear();
        // Substitui qualquer número de 4 dígitos (como 2025) pelo ano atual
        footerParagraph.textContent = footerParagraph.textContent.replace(/\d{4}/, currentYear);
    }


    // =================================================================================
    // FUNCIONALIDADE 5: MUDAR TÍTULO DA PÁGINA QUANDO INATIVA
    // Descrição: Altera o título da aba do navegador quando o usuário muda para
    // outra aba, e o restaura quando ele volta. É um pequeno detalhe interativo.
    // =================================================================================
    const originalTitle = document.title;
    
    // Evento disparado quando o usuário sai da aba
    window.addEventListener('blur', () => {
        document.title = 'Ei, volte aqui! | Valorant';
    });
    
    // Evento disparado quando o usuário volta para a aba
    window.addEventListener('focus', () => {
        document.title = originalTitle;
    });

});
