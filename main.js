// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const productsContainer = document.getElementById('products-container');

let products = [];

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
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

// Fetch Products from JSON Server
async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:5501/products');
        products = await response.json(); 
        renderProducts(products); 
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Render Products
function renderProducts(products) {
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-club">${product.club}</p>
                <p class="product-price">$${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Initialize
fetchProducts();

// Scroll Up Feature
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
