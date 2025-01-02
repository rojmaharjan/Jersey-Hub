// Cart State
let cart = [];

// DOM Elements
const cartModal = document.getElementById('cart-modal');
const cartIcon = document.querySelector('.cart-icon');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const closeBtn = document.getElementById('close-btn');

// Toggle Cart Modal
cartIcon?.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal?.classList.toggle('active');
});

// Close cart on close button click
closeBtn?.addEventListener("click", () => {
    cartModal?.classList.remove("active");
});

// Prevent clicks inside the cart modal from closing it
cartModal?.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close cart when clicking outside the cart modal
document.addEventListener('click', (e) => {
    if (cartModal?.classList.contains('active') && !cartModal.contains(e.target) && !cartIcon.contains(e.target)) {
        cartModal?.classList.remove('active');
    }
});


// Unified Add to Cart
window.addToCart = function (itemId, source = 'main') {
    // Determine the source dataset (either `products` or `jerseys`)
    const dataset = source === 'main' ? products : jerseys;
    const item = dataset.find(p => p.id === itemId);

    if (!item) {
        console.error(`Item with ID ${itemId} not found.`);
        return;
    }

    const existingItem = cart.find(cartItem => cartItem.id === itemId && cartItem.source === source);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1,
            source // Add a source identifier to differentiate items
        });
    }

    updateCart();
    cartModal?.classList.add('active');
};

// Update Cart
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items display
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.club}</p>
                <p>
                    $${item.price} x ${item.quantity} 
                    <button onclick="decrementQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="incrementQuantity(${item.id})">+</button>
                </p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);

    // Save cart to localStorage
    saveCartToLocalStorage();
}

// Increment item quantity
function incrementQuantity(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity++;
        updateCart(); // Re-render the cart
    }
}

// Decrement item quantity
function decrementQuantity(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (item && item.quantity > 1) { // Ensure quantity doesn't go below 1
        item.quantity--;
        updateCart(); // Re-render the cart
    }
}


// Remove from Cart
window.removeFromCart = function (itemId) {
    cart = cart.filter(item => item.id !== itemId );
    updateCart();
};

// Save Cart to Local Storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load Cart from Local Storage
function loadCartFromLocalStorage() {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        cart = storedCart;
        updateCart();
    }
}

// Load cart on page load
document.addEventListener('DOMContentLoaded', loadCartFromLocalStorage);
