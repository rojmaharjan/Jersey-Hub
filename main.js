// Products Data
const products = [
    {
        id: 1,
        name: "Home Jersey 2024",
        club: "FC Barcelona",
        price: 79.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZV2TUfR-fgVvFaHMOPXmeBUKsr5w4mtEZg&s"
    },
    {
        id: 2,
        name: "Home Jersey 2024",
        club: "Real Madrid",
        price: 69.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7dsKDv1VMhXNv_R7Bzz6crx8OCBd1SU_yg&s"
    },
    {
        id: 3,
        name: "Home Jersey 2024",
        club: "Manchester United",
        price: 89.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt4wGDlaLxNtmuEWWCeu9vslZjtOBY_4n7Uw&s"
    },
    {
        id: 4,
        name: "Home Jersey 2024",
        club: "Chelsea",
        price: 89.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExrGdxOH6KXOdx4J24ff3IuQDyANLNb2FnQ&s"
    },
    {
        id: 5,
        name: "Home Jersey 2024",
        club: "Liverpool",
        price: 79.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTbfDTLgyWS_Q3LqznwHfg8McqIJzmOra5Q&s"
    },
    {
        id: 6,
        name: "Home Jersey 2024",
        club: "Los Angeles Lakers",
        price: 69.99,
        image: "./public/Los Angeles Lakers Home Jersey 2024.jpg"
    },
    {
        id: 7,
        name: "Home Jersey 2024",
        club: "Golden State Warriors",
        price: 69.99,
        image: "./public/Golden State Warriors Home Jersey 2024.jpg"
    },
    {
        id: 8,
        name: "Home Basketball Jersey",
        club: "Miami Heat",
        price: 89.99,
        image: "./public/Miami Heat Basketball Jersey.jpg"
    },
    {
        id: 9,
        name: "Home Basketball Jersey",
        club: "LA Lakers",
        price: 79.99,
        image: "./public/LA Lakers Basketball Jersey.jpg"
    },
    {
        id: 10,
        name: "Home Jersey 2024",
        club: "New York Knicks",
        price: 69.99,
        image: "./public/New York Knicks Home Jersey 2024.jpg"
    },
    {
        id: 11,
        name: 'Home Cricket Jersey 2024',
        club: 'India',
        price: 11.99,
        image: "./public/India Home Jersey 2024.jpg"
    },
    {
        id: 12,
        name: 'Home Cricket Jersey 2024',
        club: 'Australia',
        price: 11.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcroBKuf0sGZGKzHKC-pltDUB5xU7IZHB4A&s'
    },
    {
        id: 13,
        name: 'Home football Jersey 2024',
        club: 'England',
        price: 11.99,
        image: "./public/England Home Jersey 2024.jpg"
    },
    {
        id: 14,
        name: 'Home Cricket Jersey 2024',
        club: 'Pakistan',
        price: 11.99,
        image: "./public/Pakistan Home Jersey 2024.jpg"
    },
    {
        id: 15,
        name: 'Home Cricket Jersey 2024',
        club: 'New Zealand',
        price: 11.99,
        image: "./public/New Zealand Home Jersey 2024.jpg"
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const productsContainer = document.getElementById('products-container');

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

// Render Products
function renderProducts() {
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