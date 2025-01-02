const jerseys = [
  {
    id: 201,
    name: "Home Jersey 23/24", 
    club: "Los Angeles Lakers", 
    price: 99.99,
    image: "/image/Basketball/Los Angeles Lakers Home Jersey 2024.jpg" 
  },
  {
    id: 202,
    name: "Home Jersey 23/24", 
    club: "Golden State Warriors", 
    price: 104.99,
    image: "/image/Basketball/Golden State Warriors Home Jersey 2024.jpg" 
  },
  {
    id: 203,
    name: "Home Jersey 23/24", 
    club: "Boston Celtics", 
    price: 99.99,
    image: "/image/Basketball/Boston Celtics Home Jersey 2024.jpg" 
  },
  {
    id: 204,
    name: "Away Jersey 23/24", 
    club: "Los Angeles Lakers", 
    price: 99.99,
    image: "/image/Basketball/Los Angeles Lakers Away Jersey 2024.jpg" 
  },
  {
    id: 205,
    name: "Away Jersey 23/24", 
    club: "Golden State Warriors", 
    price: 104.99,
    image: "/image/Basketball/Golden State Warriors Away Jersey 2024.jpg" 
  },
  {
    id: 206,
    name: "City Edition Jersey 23/24", 
    club: "Boston Celtics", 
    price: 119.99,
    image: "/image/Basketball/Boston Celtics City Edition Jersey 2024.jpg" 
  },
  {
    id: 207,
    name: "Classic Jersey", 
    club: "Chicago Bulls", 
    price: 124.99,
    image: "/image/Basketball/Chicago Bulls Classic Jersey.jpg" 
  },
  {
    id: 208,
    name: "Home Jersey 23/24", 
    club: "Brooklyn Nets", 
    price: 99.99,
    image: "/image/Basketball/Brooklyn Nets Home Jersey 2024.jpg" 
  },
  {
    id: 209,
    name: "Home Jersey 23/24", 
    club: "Milwaukee Bucks", 
    price: 104.99,
    image: "/image/Basketball/Milwaukee Bucks Home Jersey 2024.jpg" 
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