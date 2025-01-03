const jerseyContainer = document.getElementById('jerseyContainer');
const clubFilter = document.getElementById('clubFilter');
const priceSort = document.getElementById('priceSort');

// Fetch data from the db.json
let jerseys = [];

fetch('http://localhost:5501/Football')
  .then(response => response.json())
  .then(data => {
    jerseys = data;
    // Populate club filter options
    const clubs = [...new Set(jerseys.map(jersey => jersey.club))];
    clubs.forEach(club => {
      const option = document.createElement('option');
      option.value = club;
      option.textContent = club;
      clubFilter.appendChild(option);
    });

    // Initial render
    updateJerseys();
  })
  .catch(error => {
    console.error('Error fetching jerseys:', error);
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