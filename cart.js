// Bird Haven - Cart Logic

let cart = JSON.parse(localStorage.getItem('bird_haven_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    initAddToCartButtons();

    if (document.getElementById('cart-items-list')) {
        renderCartPage();
    }
});

function initAddToCartButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const id = e.target.dataset.id;
            addToCart(id);
        }
    });
}

function addToCart(productId) {
    // Simplified for demo, in real app we'd fetch data or use a global store
    const item = { id: productId, qty: 1 };
    const existing = cart.find(i => i.id === productId);

    if (existing) {
        existing.qty++;
    } else {
        cart.push(item);
    }

    localStorage.setItem('bird_haven_cart', JSON.stringify(cart));
    updateCartBadge();
    showToast('Produit ajouté au panier !');
}

function updateCartBadge() {
    const badges = document.querySelectorAll('#cart-count');
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    badges.forEach(b => b.textContent = total);
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function renderCartPage() {
    const list = document.getElementById('cart-items-list');
    const emptyMsg = document.getElementById('empty-cart-msg');

    if (cart.length === 0) {
        list.style.display = 'none';
        emptyMsg.style.display = 'block';
        return;
    }

    list.style.display = 'block';
    emptyMsg.style.display = 'none';

    list.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-info">
                <h4>Produit #${item.id}</h4>
                <p>Quantité: ${item.qty}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart('${item.id}')">Supprimer</button>
        </div>
    `).join('');
}
