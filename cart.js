// Bird Haven - Cart Logic

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('bird_haven_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    initAddToCartButtons();

    // Check if we are on the cart page
    if (document.getElementById('cart-items-list')) {
        renderCartPage();
    }
});

/**
 * Initialize event listeners for "Add to Cart" buttons
 * Uses event delegation for dynamically rendered content
 */
function initAddToCartButtons() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart');
        if (btn) {
            const productId = btn.dataset.id;

            // Try to find product info from the card itself
            const card = btn.closest('.product-card');
            let productData = { id: productId };

            if (card) {
                const name = card.querySelector('h3')?.textContent;
                const priceText = card.querySelector('.price')?.textContent;
                const price = priceText ? parseFloat(priceText.replace(/[^\d.]/g, '')) : 0;
                const image = card.querySelector('img')?.src;

                productData = {
                    id: productId,
                    name: name || `Produit #${productId}`,
                    price: price,
                    image: image || '',
                    qty: 1
                };
            }

            addToCart(productData, btn);
        }
    });
}

/**
 * Add an item to the cart and update storage
 */
function addToCart(product, button) {
    const existing = cart.find(i => i.id === product.id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push(product);
    }

    // Save to localStorage
    localStorage.setItem('bird_haven_cart', JSON.stringify(cart));

    // Update UI
    updateCartBadge();

    // Visual feedback on button
    if (button) {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i data-lucide="check"></i> Ajouté !';
        button.classList.add('btn-success');
        if (window.lucide) window.lucide.createIcons();

        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('btn-success');
            if (window.lucide) window.lucide.createIcons();
        }, 2000);
    }

    showToast(`${product.name} ajouté au panier !`);
}

/**
 * Update the cart badge count in the header
 */
function updateCartBadge() {
    const badges = document.querySelectorAll('#cart-count');
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    badges.forEach(b => {
        b.textContent = total;
        // Pulse effect if count > 0
        if (total > 0) {
            b.classList.add('pulse');
            setTimeout(() => b.classList.remove('pulse'), 3000);
        }
    });
}

/**
 * Show a simple toast notification
 */
function showToast(msg) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = msg;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('active');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

/**
 * Render items on the panier.html page
 */
function renderCartPage() {
    const list = document.getElementById('cart-items-list');
    const emptyMsg = document.getElementById('empty-cart-msg');
    const summary = document.getElementById('cart-summary');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');

    if (!list || !emptyMsg || !summary) return;

    if (cart.length === 0) {
        list.style.display = 'none';
        summary.style.display = 'none';
        emptyMsg.style.display = 'block';
        return;
    }

    emptyMsg.style.display = 'none';
    list.style.display = 'block';
    summary.style.display = 'block';

    list.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="cart-item-price">${item.price.toFixed(2)} €</p>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
                </div>
            </div>
            <div class="cart-item-actions">
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        </div>
    `).join('');

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    subtotalEl.textContent = `${subtotal.toFixed(2)} €`;
    totalEl.textContent = `${subtotal.toFixed(2)} €`;

    if (window.lucide) window.lucide.createIcons();
}

/**
 * Update quantity of a product in cart
 */
window.updateQty = function (productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
    } else {
        localStorage.setItem('bird_haven_cart', JSON.stringify(cart));
        updateCartBadge();
        renderCartPage();
    }
};

/**
 * Remove a product from the cart
 */
window.removeFromCart = function (productId) {
    cart = cart.filter(i => i.id !== productId);
    localStorage.setItem('bird_haven_cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartPage();
    showToast('Produit retiré du panier');
};
