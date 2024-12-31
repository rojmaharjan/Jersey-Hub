const jerseys = [
    {
      id: 1,
      name: "Home Kit 23/24",
      club: "FC Barcelona",
      price: 89.99,
      image: "/image/football/FCB 23 24 home kit.jpg"
    },
    {
      id: 2,
      name: "Home Kit 23/24",
      club: "Real Madrid",
      price: 94.99,
      image: "/image/football/real madrid home kit 23 24.jpg"
    },
    {
      id: 3,
      name: "Home Kit 23/24",
      club: "Atlético Madrid",
      price: 89.99,
      image: "/image/football/atletico madrid home kit 23 24.jpg"
    },
    {
      id: 4,
      name: "Away Kit 23/24",
      club: "Sevilla FC",
      price: 89.99,
      image: "/image/football/sevilla home kit 23 24.jpg"
    },
    {
      id: 5,
      name: "Away Kit 23/24",
      club: "Real Madrid",
      price: 94.99,
      image: "/image/football/real madrid away kit 23 24.jpg"
    },
    {
      id: 6,
      name: "Third Kit 23/24",
      club: "Manchester United",
      price: 89.99,
      image: "/image/football/man utd third kit 24 25.jpg"
    },
    {
      id: 7,
      name: "Home Kit 23/24",
      club: "Liverpool",
      price: 89.99,
      image: "/image/football/liverpool home kit 23 24.jpg"
    },
    {
      id: 8,
      name: "Home Kit 23/24",
      club: "Arsenal",
      price: 94.99,
      image: "/image/football/arsenal home kit 23 24.jpg"
    }
    // ,
    // {
    //   id: 9,
    //   name: "Home Kit 23/24",
    //   club: "Manchester City",
    //   price: 89.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 10,
    //   name: "Away Kit 23/24",
    //   club: "Chelsea",
    //   price: 89.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 11,
    //   name: "Away Kit 23/24",
    //   club: "Juventus",
    //   price: 94.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 12,
    //   name: "Third Kit 23/24",
    //   club: "Inter Milan",
    //   price: 89.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 13,
    //   name: "Home Kit 23/24",
    //   club: "AC Milan",
    //   price: 89.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 14,
    //   name: "Home Kit 23/24",
    //   club: "Bayern Munich",
    //   price: 94.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 15,
    //   name: "Away Kit 23/24",
    //   club: "Borussia Dortmund",
    //   price: 89.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 16,
    //   name: "Third Kit 23/24",
    //   club: "Paris Saint-Germain",
    //   price: 94.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 17,
    //   name: "Home Kit 23/24",
    //   club: "Ajax",
    //   price: 89.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 18,
    //   name: "Home Kit 23/24",
    //   club: "Tottenham Hotspur",
    //   price: 89.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 19,
    //   name: "Home Kit 23/24",
    //   club: "Napoli",
    //   price: 94.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 20,
    //   name: "Away Kit 23/24",
    //   club: "RB Leipzig",
    //   price: 89.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 21,
    //   name: "Away Kit 23/24",
    //   club: "AS Roma",
    //   price: 94.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 22,
    //   name: "Third Kit 23/24",
    //   club: "Lazio",
    //   price: 89.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 23,
    //   name: "Home Kit 23/24",
    //   club: "Benfica",
    //   price: 89.99,
    //   image: "/image/football/.jpg"
    // },
    // {
    //   id: 24,
    //   name: "Home Kit 23/24",
    //   club: "Porto",
    //   price: 94.99,
    //   image: "/image/football/.jpg"
    // }
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
      <button class="add-to-cart" onclick="addToCart(${jersey.id})">
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