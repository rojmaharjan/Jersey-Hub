const jerseys = [
  
  {
    id: 301,
    name: "Home Kit 23/24",
    club: "India",
    price: 89.99,
    image: "/image/Cricket/Indian Cricket Home Jersey 2024.jpg"
  },
  {
    id: 302,
    name: "Home Kit 23/24",
    club: "Australia",
    price: 94.99,
    image: "/image/Cricket/Australia Cricket Home Jersey 2024.webp"
  },
  {
    id: 303,
    name: "Home Kit 23/24",
    club: "England",
    price: 89.99,
    image: "/image/Cricket/England Cricket Home Jersey 2024.webp"
  },
  {
    id: 304,
    name: "Home Kit 23/24",
    club: "South Africa",
    price: 89.99,
    image: "/image/Cricket/South Africa Cricket Away Jersey 2024.jpg"
  },
  {
    id: 305,
    name: "Home Kit 23/24",
    club: "New Zealand",
    price: 94.99,
    image: "/image/Cricket/New Zealand Cricket Away Jersey 2024.jpg"
  },
  {
    id:306,
    name: "Home Kit 23/24",
    club: "Pakistan",
    price: 89.99,
    image: "/image/Cricket/Pakistan Cricket Third Jersey 2024.jpg"
  },
  {
    id: 307,
    name: "Home Kit 23/24",
    club: "Sri Lanka",
    price: 89.99,
    image: "/image/Cricket/Sri Lanka Cricket Home Jersey 2024.jpg"
  },
  {
    id: 308,
    name: "Home Kit 23/24",
    club: "Nepal",
    price: 94.99,
    image: "/image/Cricket/Nepal Cricket Home Jersey 2024.jpg"
  },
  {
    id: 309,
    name: "Home Kit 23/24",
    club: "Afghanistan",
    price: 89.99,
    image: "/image/Cricket/Afghanistan Cricket Home Jersey 2024.jpg"
  },
  {
    id: 310,
    name: "Home Kit 23/24",
    club: "Bangladesh",
    price: 89.99,
    image: "/image/Cricket/Bangladesh Cricket Away Jersey 2024.jpg"
  },
  {
    id: 311,
    name: "Home Kit 23/24",
    club: "China",
    price: 89.99,
    image: "/image/Cricket/China Cricket Third Jersey 2024.jpg"
  },
  {
    id: 312,
    name: "Home Kit 23/24",
    club: "West Indies ",
    price: 89.99,
    image: "/image/Cricket/West Indies  Cricket Third Jersey 2024.jpg"
  }
  ];
  
// Get DOM elements
const jerseyContainer = document.getElementById('jerseyContainer');
const clubFilter = document.getElementById('clubFilter');
const priceSort = document.getElementById('priceSort');

// Populate club filter options
const clubs = [...new Set(jerseys.map(jersey => jersey.club))];
clubs.forEach(club => {
  const option = document.createElement('option');
  option.value = club;
  option.textContent = club;
  clubFilter.appendChild(option);
});

// Create jersey card
function createJerseyCard(jersey) {
  return `
    <div class="jersey-card">
      <img src="${jersey.image}" alt="${jersey.name}" class="jersey-image">
      <div class="jersey-info">
      <h3 class="jersey-name">${jersey.name}</h3>
      <p class="club-name">${jersey.club}</p>
      <p class="price">$${jersey.price}</p>
      <button class="add-to-cart" onclick="addToCart(${jersey.id}, 'jerseys')">
          Add to Cart
      </button>
      </div>
    </div>
  `;
}


// Filter and sort jerseys
function updateJerseys() {
  let filteredJerseys = [...jerseys];
  
  // Apply club filter
  if (clubFilter.value !== 'all') {
    filteredJerseys = filteredJerseys.filter(jersey => jersey.club === clubFilter.value);
  }
  
  // Apply price sort
  if (priceSort.value === 'lowToHigh') {
    filteredJerseys.sort((a, b) => a.price - b.price);
  } else if (priceSort.value === 'highToLow') {
    filteredJerseys.sort((a, b) => b.price - a.price);
  }
  
  // Render jerseys
  jerseyContainer.innerHTML = filteredJerseys.map(createJerseyCard).join('');
}

// Add event listeners
clubFilter.addEventListener('change', updateJerseys);
priceSort.addEventListener('change', updateJerseys);

// Initial render
updateJerseys();