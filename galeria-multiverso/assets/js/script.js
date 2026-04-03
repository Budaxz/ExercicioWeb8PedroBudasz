const databaseMultiverso = [
    {
        nome: "Monkey D. Luffy",
        universo: "One Piece",
        bio: "Capitão dos Piratas do Chapéu de Palha e usuário da Gomu Gomu no Mi, que lhe deu um corpo de borracha. Seu sonho é encontrar o lendário tesouro One Piece e se tornar o Rei dos Piratas.",
        img: "https://www.infinitevisibility7.com/cdn/shop/files/LuffyWanoKuniColoringPageOnePieceSamuraiArtInstantDigitalDownloadAdventurousLuffyPrintable.jpg"
    },
    {
        nome: "Homem-Aranha",
        universo: "Marvel Comics",
        bio: "Peter Parker, picado por uma aranha radioativa, ganha habilidades aracnídeas. Ele equilibra a vida de um jovem universitário com a responsabilidade de ser o herói 'Amigão da Vizinhança' em Nova York.",
        img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=400"
    },
    {
        nome: "Batman",
        universo: "DC Comics",
        bio: "O bilionário Bruce Wayne dedica sua vida a combater o crime em Gotham City após a morte trágica de seus pais. Sem superpoderes, ele usa seu intelecto, artes marciais e tecnologia.",
        img: "https://images.wallpapersden.com/image/wxl-dark-knight-emerges-batman-comic-art_92364.jpg"
    },
    {
        nome: "Goku",
        universo: "Dragon Ball Z",
        bio: "Um guerreiro Saiyajin criado na Terra. Extremamente forte, Goku está sempre em busca de oponentes poderosos para superar seus próprios limites, protegendo o universo de ameaças cósmicas.",
        img: "https://i.ebayimg.com/images/g/G14AAOSwdnZmXj~X/s-l1600.webp"
    },
    {
        nome: "Mestre Yoda",
        universo: "Star Wars",
        bio: "Um dos mais poderosos e lendários Mestres Jedi do universo. Yoda treinou Jedi por mais de 800 anos, servindo como Grão-Mestre da Ordem Jedi e conhecedor profundo do lado luminoso da Força.",
        img: "https://images6.alphacoders.com/871/thumb-1920-871621.jpg"
    },
    {
        nome: "Hermione Granger",
        universo: "Harry Potter",
        bio: "Uma bruxa brilhante nascida de pais 'Trouxas'. Hermione é extremamente inteligente e leal, peça fundamental na luta contra Lord Voldemort ao lado de seus amigos Harry e Rony.",
        img: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=400"
    }
];

// Elementos do DOM
const grade = document.getElementById('grade-personagens');
const modal = document.getElementById('modal-detalhes');
const btnFechar = document.getElementById('btn-fechar-modal');

// --- 1. POPULAR A GRADE ---
function carregarGrade() {
    grade.innerHTML = ''; // Limpa a grade antes de preencher
    
    databaseMultiverso.forEach(personagem => {
        const card = document.createElement('div');
        card.classList.add('card-personagem');
        
        // Criamos o HTML do card
        card.innerHTML = `
            <img src="${personagem.img}" alt="${personagem.nome}" class="card-imagem">
            <h2 class="card-nome">${personagem.nome}</h2>
        `;
        
        // Evento de clique no card para abrir o modal
        card.addEventListener('click', () => {
            abrirModalComDados(personagem);
        });
        
        // Anexa o card na grade
        grade.appendChild(card);
    });
}

// --- 2. LÓGICA DO MODAL ---
const modalImg = document.getElementById('modal-img');
const modalNome = document.getElementById('modal-nome');
const modalUniverso = document.getElementById('modal-universo');
const modalBio = document.getElementById('modal-bio');

function abrirModalComDados(p) {
    // Preenche o modal com os dados do personagem clicado
    modalImg.src = p.img;
    modalImg.alt = p.nome;
    modalNome.textContent = p.nome;
    modalUniverso.textContent = p.universo;
    modalBio.textContent = p.bio;
    
    // Mostra o modal adicionando a classe 'ativo'
    modal.classList.add('ativo');
}

function fecharModal() {
    modal.classList.remove('ativo');
}

// Eventos para fechar o modal
btnFechar.addEventListener('click', fecharModal);

// Fecha se clicar fora do container do modal (no overlay preto)
modal.addEventListener('click', (e) => {
    // Verifica se o clique foi exatamente no overlay e não dentro do container
    if (e.target === modal) {
        fecharModal();
    }
});

// Inicialização
carregarGrade();