const jerseys = [
  {
    id: 1,
    name: "Home Kit 23/24",
    club: "India",
    price: 89.99,
    image: ""
  },
  {
    id: 2,
    name: "Home Kit 23/24",
    club: "Australia",
    price: 94.99,
    image: ""
  },
  {
    id: 3,
    name: "Home Kit 23/24",
    club: "England",
    price: 89.99,
    image: ""
  },
  {
    id: 4,
    name: "Away Kit 23/24",
    club: "South Africa",
    price: 89.99,
    image: ""
  },
  {
    id: 5,
    name: "Away Kit 23/24",
    club: "New Zealand",
    price: 94.99,
    image: ""
  },
  {
    id: 6,
    name: "Third Kit 23/24",
    club: "Pakistan",
    price: 89.99,
    image: ""
  },
  {
    id: 7,
    name: "Home Kit 23/24",
    club: "Sri Lanka",
    price: 89.99,
  },
  {
    id: 8,
    name: "Home Kit 23/24",
    club: "Nepal",
    price: 94.99,
    image: ""
  },
  {
    id: 9,
    name: "Home Kit 23/24",
    club: "Afghanistan",
    price: 89.99,
    image: ""
  },
  {
    id: 10,
    name: "Away Kit 23/24",
    club: "Bangladesh",
    price: 89.99,
    image: ""
  },
  {
    id: 11,
    name: "Away Kit 23/24",
    club: "Argentina",
    price: 94.99,
    image: ""
  },
  {
    id: 12,
    name: "Third Kit 23/24",
    club: "China",
    price: 89.99,
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