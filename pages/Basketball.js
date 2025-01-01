const jerseys = [
  {
    id: 1,
    name: "Home Jersey 23/24", 
    club: "Los Angeles Lakers", 
    price: 99.99,
    image: "" 
  },
  {
    id: 2,
    name: "Home Jersey 23/24", 
    club: "Golden State Warriors", 
    price: 104.99,
    image: "" 
  },
  {
    id: 3,
    name: "Home Jersey 23/24", 
    club: "Boston Celtics", 
    price: 99.99,
    image: "" 
  },
  {
    id: 4,
    name: "Away Jersey 23/24", 
    club: "Los Angeles Lakers", 
    price: 99.99,
    image: "" 
  },
  {
    id: 5,
    name: "Away Jersey 23/24", 
    club: "Golden State Warriors", 
    price: 104.99,
    image: "" 
  },
  {
    id: 6,
    name: "City Edition Jersey 23/24", 
    club: "Boston Celtics", 
    price: 119.99,
    image: "" 
  },
  {
    id: 7,
    name: "Classic Jersey", 
    club: "Chicago Bulls", 
    price: 124.99,
    image: "" 
  },
  {
    id: 8,
    name: "Home Jersey 23/24", 
    club: "Brooklyn Nets", 
    price: 99.99,
    image: "" 
  },
  {
    id: 9,
    name: "Home Jersey 23/24", 
    club: "Milwaukee Bucks", 
    price: 104.99,
    image: "" 
  },
  {
    id: 10,
    name: "Away Jersey 23/24", 
    club: "Los Angeles Lakers", 
    price: 99.99,
    image: "" 
  },
  {
    id: 11,
    name: "Away Jersey 23/24", 
    club: "Golden State Warriors", 
    price: 104.99,
    image: "" 
  },
  {
    id: 12,
    name: "City Edition Jersey 23/24", 
    club: "Boston Celtics", 
    price: 119.99,
    image: "" 
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