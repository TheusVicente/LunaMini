// Array de produtos baseado nas fotos enviadas
const products = [
    {
        id: 1,
        title: "Kasuga Grocery Store (AM01-006)",
        price: "R$ 199,99",
        desc: "Mini réplica detalhada de uma mercearia japonesa clássica, com luzes LED integradas ativadas por toque e estrutura em madeira e papel especial.",
        image: "Kasuga Grocery.jpg",
        tag: "Com iluminação LED"
    },
    {
        id: 2,
        title: "Twilight Library Book Nook",
        price: "R$ 199,99",
        desc: "Cenário vitoriano de biblioteca clássica, com lareira iluminada, estantes minuciosas, relógio de pêndulo e poltrona aconchegante.",
        image: "TwilightLibrary.jpg",
        tag: "Mais Vendido"
    },
    {
        id: 3,
        title: "Diy Mini House Floricultura",
        price: "R$ 275,99",
        desc: "Encantadora floricultura com toldo vintage, vasos decorados, plantas delicadas e detalhes aconchegantes iluminados.",
        image: "MiniHouseFloricultura.jpg",
        tag: "Completo"
    },
    {
        id: 4,
        title: "Super Dream Leisurely Coffee",
        price: "R$ 171,99",
        desc: "Mini cenário de cafeteria aconchegante com 66 peças, incluindo móveis de madeira, moedor de café e iluminação.",
        image: "DiySuperDream.jpg",
        tag: "Novidade"
    }
];

// Função para renderizar os produtos na tela com foco interativo
function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = products.map(p => `
        <article class="product-card">
            <div class="product-img-holder">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                <span class="product-tag">${p.tag}</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.title}</h3>
                <div class="product-price">${p.price}</div>
                <p class="product-desc">${p.desc}</p>
                <button class="btn-view-details" onclick="openModal(${p.id})" tabindex="0" aria-label="Ver detalhes de ${p.title}">Ver Opções de Compra</button>
            </div>
        </article>
    `).join('');
}

// Abrir o Modal de Detalhes
function openModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById('modalTitle').innerText = product.title;
    document.getElementById('modalPrice').innerText = product.price;
    document.getElementById('modalDesc').innerText = product.desc;
    
    const modal = document.getElementById('productModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Fechar o Modal
function closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Configuração de eventos após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (event) => {
        const modal = document.getElementById('productModal');
        if (event.target === modal) {
            closeModal();
        }
    });

    // Suporte a fechamento por tecla ESC (Smart TVs e teclados)
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});