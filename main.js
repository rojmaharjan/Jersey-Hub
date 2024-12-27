// Products Data
const products = [
    {
        id: 1,
        name: "FC Barcelona Home Jersey 2024",
        price: 79.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZV2TUfR-fgVvFaHMOPXmeBUKsr5w4mtEZg&s"
    },
    {
        id: 2,
        name: "Real Madrid Home Jersey 2024",
        price: 69.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7dsKDv1VMhXNv_R7Bzz6crx8OCBd1SU_yg&s"
    },
    {
        id: 3,
        name: "Manchester United Home Jersey 2024",
        price: 89.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt4wGDlaLxNtmuEWWCeu9vslZjtOBY_4n7Uw&s"
    },
    {
        id: 4,
        name: "Chelsea Home Jersey 2024",
        price: 89.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExrGdxOH6KXOdx4J24ff3IuQDyANLNb2FnQ&s"
    },
    {
        id: 5,
        name: "Liverpool Home Jersey 2024",
        price: 79.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTbfDTLgyWS_Q3LqznwHfg8McqIJzmOra5Q&s"
    },
    {
        id: 6,
        name: "Los Angeles Lakers Home Jersey 2024",
        price: 69.99,
        image: "./public/Los Angeles Lakers Home Jersey 2024.jpg"
    },
    {
        id: 7,
        name: "Golden State Warriors Home Jersey 2024",
        price: 69.99,
        image: "./public/Golden State Warriors Home Jersey 2024.jpg"
    },
    {
        id: 8,
        name: "Miami Heat Basketball Jersey",
        price: 89.99,
        image: "./public/Miami Heat Basketball Jersey.jpg"
    },
    {
        id: 9,
        name: "LA Lakers Basketball Jersey",
        price: 79.99,
        image: "./public/LA Lakers Basketball Jersey.jpg"
    },
    {
        id: 10,
        name: "New York Knicks Home Jersey 2024",
        price: 69.99,
        image: "./public/New York Knicks Home Jersey 2024.jpg"
    },
    {
        id: 11,
        name: 'Indian Home Cricket Jersey 2024',
        price: 11.99,
        image: "./public/India Home Jersey 2024.jpg"
    },
    {
        id: 12,
        name: 'Australia Home Cricket Jersey 2024',
        price: 11.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcroBKuf0sGZGKzHKC-pltDUB5xU7IZHB4A&s'
    },
    {
        id: 13,
        name: 'England Home football Jersey 2024',
        price: 11.99,
        image: "./public/England Home Jersey 2024.jpg"
    },
    {
        id: 14,
        name: 'Pakistan Home Cricket Jersey 2024',
        price: 11.99,
        image: "./public/Pakistan Home Jersey 2024.jpg"
    },
    {
        id: 15,
        name: 'New Zealand Home Cricket Jersey 2024',
        price: 11.99,
        image: "./public/New Zealand Home Jersey 2024.jpg"
    }
];

// Cart State
let cart = [];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const cartModal = document.getElementById('cart-modal');
const cartIcon = document.querySelector('.cart-icon');
const productsContainer = document.getElementById('products-container');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

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

// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto advance slides
setInterval(nextSlide, 5000);

// Render Products
function renderProducts() {
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

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
// cart model cross button
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




// Initialize
renderProducts();

 //scroll up js
 document.addEventListener('scroll', () => {
    const scrollUpButton = document.querySelector('.scroll-up');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const triggerHeight = document.documentElement.scrollHeight * 0.3;

    if (scrollPosition > triggerHeight) {
        scrollUpButton.classList.add('_show-scroll');
    } else {
        scrollUpButton.classList.remove('_show-scroll');
    }
});