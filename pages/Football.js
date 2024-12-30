const jerseys = [
    {
      id: 1,
      name: "Home Kit 23/24",
      club: "FC Barcelona",
      price: 89.99,
      image: ""
    },
    {
      id: 2,
      name: "Home Kit 23/24",
      club: "Real Madrid",
      price: 94.99,
      image: ""
    },
    {
      id: 3,
      name: "Home Kit 23/24",
      club: "Atlético Madrid",
      price: 89.99,
      image: ""
    },
    {
      id: 4,
      name: "Away Kit 23/24",
      club: "Sevilla FC",
      price: 89.99,
      image: ""
    },
    {
      id: 5,
      name: "Away Kit 23/24",
      club: "Real Madrid",
      price: 94.99,
      image: ""
    },
    {
      id: 6,
      name: "Third Kit 23/24",
      club: "Manchester United",
      price: 89.99,
      image: ""
    },
    {
      id: 7,
      name: "Home Kit 23/24",
      club: "Liverpool",
      price: 89.99,
      image: ""
    },
    {
      id: 8,
      name: "Home Kit 23/24",
      club: "Arsenal",
      price: 94.99,
      image: ""
    },
    {
      id: 9,
      name: "Home Kit 23/24",
      club: "Manchester City",
      price: 89.99,
      image: ""
    },
    {
      id: 10,
      name: "Away Kit 23/24",
      club: "Chelsea",
      price: 89.99,
      image: ""
    },
    {
      id: 11,
      name: "Away Kit 23/24",
      club: "Juventus",
      price: 94.99,
      image: ""
    },
    {
      id: 12,
      name: "Third Kit 23/24",
      club: "Inter Milan",
      price: 89.99,
      image: ""
    },
    {
      id: 13,
      name: "Home Kit 23/24",
      club: "AC Milan",
      price: 89.99,
      image: ""
    },
    {
      id: 14,
      name: "Home Kit 23/24",
      club: "Bayern Munich",
      price: 94.99,
      image: ""
    },
    {
      id: 15,
      name: "Away Kit 23/24",
      club: "Borussia Dortmund",
      price: 89.99,
      image: ""
    },
    {
      id: 16,
      name: "Third Kit 23/24",
      club: "Paris Saint-Germain",
      price: 94.99,
      image: ""
    },
    {
      id: 17,
      name: "Home Kit 23/24",
      club: "Ajax",
      price: 89.99,
      image: ""
    },
    {
      id: 18,
      name: "Home Kit 23/24",
      club: "Tottenham Hotspur",
      price: 89.99,
      image: ""
    },
    {
      id: 19,
      name: "Home Kit 23/24",
      club: "Napoli",
      price: 94.99,
      image: ""
    },
    {
      id: 20,
      name: "Away Kit 23/24",
      club: "RB Leipzig",
      price: 89.99,
      image: ""
    },
    {
      id: 21,
      name: "Away Kit 23/24",
      club: "AS Roma",
      price: 94.99,
      image: ""
    },
    {
      id: 22,
      name: "Third Kit 23/24",
      club: "Lazio",
      price: 89.99,
      image: ""
    },
    {
      id: 23,
      name: "Home Kit 23/24",
      club: "Benfica",
      price: 89.99,
      image: ""
    },
    {
      id: 24,
      name: "Home Kit 23/24",
      club: "Porto",
      price: 94.99,
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
      <h3 class="jersey-name">${jersey.name}</h3>
      <p class="club-name">${jersey.club}</p>
      <p class="price">$${jersey.price}</p>
      <button class="add-to-cart" onclick="addToCart(${jersey.id})">
                    Add to Cart
                </button>
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