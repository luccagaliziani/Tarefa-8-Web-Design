Claro! Um bom README.md é essencial para documentar um projeto.

Preparei um arquivo README.md completo, com mais de 100 linhas, que descreve o seu projeto e detalha as 5 funcionalidades JavaScript que implementamos na resposta anterior. Ele está formatado em Markdown, pronto para ser usado no seu repositório do GitHub.

Instruções:
Crie um novo arquivo na pasta do seu projeto chamado README.md (o nome é importante, use exatamente este).

Copie e cole todo o texto abaixo nesse arquivo.

Salve o arquivo e envie para o seu GitHub junto com os outros (git add README.md, git commit, git push).

Conteúdo do Arquivo README.md
Markdown

# Projeto Guia de Valorant - Web Design

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Um guia visual para o jogo Valorant, desenvolvido como um projeto acadêmico para a disciplina de Web Design. O foco principal é a demonstração de habilidades em HTML5 semântico, CSS3 avançado e a implementação de interatividade com JavaScript puro (Vanilla JS).

---

## 📜 Sobre o Projeto

Este projeto consiste na criação de uma página web estática, porém interativa, que serve como um guia de referência para jogadores de Valorant. A página apresenta um catálogo visual dos agentes do jogo, com detalhes sobre suas habilidades, além de seções dedicadas aos mapas, arsenal e dicas para iniciantes.

O desafio principal foi construir uma página rica em conteúdo, com mais de 500 linhas de HTML, e adicionar funcionalidades dinâmicas através de JavaScript para melhorar a experiência do usuário, tudo isso sem o uso de frameworks ou bibliotecas externas.

O layout foi construído utilizando Flexbox para garantir a responsividade e a correta organização dos elementos em diferentes tamanhos de tela.

---

## ✨ Funcionalidades Implementadas em JavaScript

O projeto conta com 5 funcionalidades principais implementadas via JavaScript para adicionar dinamismo e interatividade à página.

### 1. Rolagem Suave para Links Âncora

- **Descrição:** Melhora a navegação interna da página. Ao clicar em um link no menu principal (como "Agentes" ou "Mapas"), a página rola suavemente até a seção correspondente, em vez do salto brusco padrão do navegador.
- **Implementação:** Foi adicionado um `event listener` de clique a todos os links de navegação que apontam para uma âncora (`href^="#"`). A função de callback previne o comportamento padrão com `event.preventDefault()` e utiliza o método `scrollIntoView({ behavior: 'smooth' })` no elemento alvo para criar a animação de rolagem.

### 2. Destaque de Card de Agente ao Clicar

- **Descrição:** Fornece um feedback visual imediato ao usuário. Quando um card de agente é clicado, ele recebe uma classe CSS especial que o destaca com uma borda colorida e um leve zoom.
- **Implementação:** Um `event listener` de clique foi adicionado a cada `.agent-card`. Ao ser acionado, a função primeiro remove a classe de destaque (`.highlighted-card`) de todos os outros cards para garantir que apenas um esteja destacado por vez. Em seguida, a classe é adicionada ao card que foi clicado.

### 3. Botão Dinâmico "Voltar ao Topo"

- **Descrição:** Facilita o retorno ao topo da página em um documento longo. Um botão flutuante é criado e inserido na página dinamicamente com JavaScript. Ele só se torna visível quando o usuário rola a página para baixo.
- **Implementação:** O botão é criado com `document.createElement('button')`. Seus estilos (posição, cores, etc.) são aplicados diretamente via `element.style`. Um `event listener` de `scroll` na `window` verifica a posição da rolagem (`window.scrollY`) e alterna a propriedade `display` do botão para mostrá-lo ou escondê-lo. Um `event listener` de `click` no botão executa `window.scrollTo()` para retornar ao topo.

### 4. Ano do Copyright Automático no Rodapé

- **Descrição:** Garante que a informação de copyright no rodapé esteja sempre atualizada, sem necessidade de edição manual do HTML.
- **Implementação:** O script seleciona o parágrafo no rodapé. Usando o objeto `new Date().getFullYear()`, ele obtém o ano corrente. Em seguida, utiliza o método `textContent.replace()` com uma expressão regular (`/\d{4}/`) para encontrar e substituir o ano estático (ex: 2025) pelo ano atual.

### 5. Título de Página Interativo

- **Descrição:** Um pequeno detalhe de UX que engaja o usuário. Quando o usuário navega para outra aba do navegador, o título da página do guia de Valorant muda para uma mensagem chamativa. Ao retornar, o título original é restaurado.
- **Implementação:** Dois `event listeners` são adicionados ao objeto `window`: `blur` (quando a aba perde o foco) e `focus` (quando a aba recupera o foco). A função de `blur` altera `document.title` para uma mensagem personalizada, enquanto a função de `focus` restaura o título original, que foi salvo em uma variável no início do script.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Utilizado para a estruturação semântica de todo o conteúdo da página.
- **CSS3:** Responsável por toda a estilização, layout responsivo com Flexbox, animações e o design visual inspirado na identidade do jogo Valorant.
- **JavaScript (ES6+):** Utilizado para manipular o DOM e implementar todas as funcionalidades interativas descritas acima.

---

## 🚀 Como Executar

Por ser um projeto puramente front-end, não há necessidade de um servidor ou dependências.

1.  Clone este repositório para sua máquina local.
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, etc.).

---

## 📂 Estrutura do Projeto

```
/projeto-valorant
├── 📄 index.html      # Arquivo principal com toda a estrutura do conteúdo
├── 🎨 style.css       # Folha de estilos para o design e responsividade
└── ⚙️ script.js       # Código JavaScript com as funcionalidades interativas
```

---

## 👨‍💻 Autor

- **Lucca**
