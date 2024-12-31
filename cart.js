// Cart State
let cart = [];

// DOM Elements
const cartModal = document.getElementById('cart-modal');
const cartIcon = document.querySelector('.cart-icon');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Toggle Cart Modal
cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.classList.toggle('active');
});

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    if (!cartModal.contains(e.target) && !cartIcon.contains(e.target)) {
        cartModal.classList.remove('active');
    }
});

// Add to Cart
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    cartModal.classList.add('active');
};

// Update Cart
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price} x ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Remove from Cart
window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
};

// Cart modal cross button
document.addEventListener("DOMContentLoaded", () => {
    const cartModal = document.getElementById("cart-modal");
    const openCartBtn = document.getElementById("open-cart-btn");
    const closeBtn = document.getElementById("close-btn");

    // Function to show the modal
    const showCartModal = () => {
        cartModal.style.display = "block";
    };

    // Function to hide the modal
    const hideCartModal = () => {
        cartModal.style.display = "none";
    };

    // Event listener to open the modal
    openCartBtn.addEventListener("click", showCartModal);

    // Event listener to close the modal
    closeBtn.addEventListener("click", hideCartModal);

    // Optional: Close the modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === cartModal) {
            hideCartModal();
        }
    });
});