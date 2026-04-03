# 🌌 Galeria Multiversal: O Arquivo Geek

Projeto final de uma série de 8 desafios de desenvolvimento front-end Vanilla (HTML, CSS e JavaScript). Esta aplicação consiste em uma galeria dinâmica de personagens geek com um design "Dark Professional", onde os elementos ganham vida e cor através da interação do usuário.

## 🚀 Tecnologias e Técnicas Aplicadas

* **HTML5:** * Estruturação semântica de componentes (`<main>`, `<header>`, `<aside>`, `<section>`).
  * Implementação de uma estrutura de "Janela Modal" (Popup) sobreposta ao conteúdo principal.
* **CSS3:** * **CSS Grid Layout:** Criação de uma grade responsiva utilizando `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`, garantindo adaptação automática a qualquer tamanho de tela.
  * **Filtros e Transições:** Aplicação de `filter: grayscale(100%)` para um visual sóbrio inicial, com transição suave para cores completas no `hover`.
  * **Controle de Enquadramento:** Uso de `object-fit: cover` e `object-position` para garantir que as imagens dos personagens não percam o foco nos rostos, independentemente do tamanho do card.
* **JavaScript (Vanilla):** * Estruturação de dados centralizada (Array de Objetos).
  * Renderização dinâmica do DOM (criação de elementos HTML via JS).
  * Lógica de manipulação de Modais (abertura ao clicar no card, fechamento no botão `X` ou ao clicar no overlay de fundo).

## 💻 Como executar o projeto

O projeto não requer instalação de dependências ou servidores locais.

1. Clone este repositório:
   ```bash
   git clone <https://github.com/Budaxz/ExercicioWeb8PedroBudasz.git>
Navegue até a pasta galeria-multiverso.

Dê um duplo clique no arquivo index.html para abri-lo em seu navegador.

👨‍💻 Autor

Desenvolvido por Pedro Budasz.
