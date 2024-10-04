document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.querySelector('.categories-container');

    window.scrollLeft = function() {
        categoriesContainer.scrollBy({
            top: 0,
            left: -200,
            behavior: 'smooth'
        });
    }

    window.scrollRight = function() {
        categoriesContainer.scrollBy({
            top: 0,
            left: 200,
            behavior: 'smooth'
        });
    }

    // Optional: You can also add logic to highlight the currently visible category
    // Example: Listen to the scroll event
    categoriesContainer.addEventListener('scroll', () => {
        categories.forEach(category => {
            const rect = category.getBoundingClientRect();
            const containerRect = categoriesContainer.getBoundingClientRect();
            if (rect.left >= containerRect.left && rect.right <= containerRect.right) {
                category.classList.add('active'); // Add your active class
            } else {
                category.classList.remove('active'); // Remove your active class
            }
        });
    });
});


// LOAD DISHES

let currentIndex = 3; // Starting with the first 3 dishes
const dishes = [
  {
    name: 'Veg Manchurian',
    description: 'Served With Fried Rice',
    price: '₹200',
    image: 'https://i.pinimg.com/564x/b4/fd/2b/b4fd2bd43f682e6da5ff4ec3783d4376.jpg'
  },
  {
    name: 'Chicken Biryani',
    description: 'Served With Raita',
    price: '₹300',
    image: 'https://i.pinimg.com/564x/89/74/da/8974da9876b2df5b3b6b54b1647db9da.jpg'
  },
  {
    name: 'Butter Chicken',
    description: 'Served With Naan',
    price: '₹280',
    image: 'https://i.pinimg.com/564x/f9/43/d3/f943d3524b50dc7b5c1355b2d2878a37.jpg'
  },
  {
    name: 'Pasta Alfredo',
    description: 'Served With Garlic Bread',
    price: '₹350',
    image: 'https://i.pinimg.com/564x/8f/3c/6a/8f3c6a0c0e9b2f357f78acdf8d756e5a.jpg'
  },
  {
    name: 'Tandoori Chicken',
    description: 'Served With Green Chutney',
    price: '₹400',
    image: 'https://i.pinimg.com/564x/29/ba/49/29ba49192629d6aaf4640837f949bdf8.jpg'
  },
  {
    name: 'Margherita Pizza',
    description: 'Cheese-loaded pizza',
    price: '₹450',
    image: 'https://i.pinimg.com/564x/59/4f/4a/594f4aa9f5f3dfbfecf9c5e97de7d530.jpg'
  },
  {
    name: 'Tandoori Chicken',
    description: 'Served With Green Chutney',
    price: '₹400',
    image: 'https://i.pinimg.com/564x/29/ba/49/29ba49192629d6aaf4640837f949bdf8.jpg'
  },
  {
    name: 'Margherita Pizza',
    description: 'Cheese-loaded pizza',
    price: '₹450',
    image: 'https://i.pinimg.com/564x/59/4f/4a/594f4aa9f5f3dfbfecf9c5e97de7d530.jpg'
  }
  // You can add more dishes here
];

// Function to load more dishes
function loadMoreDishes() {
  const dishList = document.getElementById('dish-list');

  // Display three more dishes
  for (let i = currentIndex; i < currentIndex + 3 && i < dishes.length; i++) {
    const dish = dishes[i];
    
    const dishCard = document.createElement('div');
    dishCard.classList.add('dish-card');
    
    dishCard.innerHTML = `
      <div class="dish-info">
        <h2>${dish.name}</h2>
        <p>${dish.description}</p>
        <p class="price">${dish.price}</p>
      </div>
      <div class="dish-image-container">
        <img src="${dish.image}" alt="Dish Image">
        <button class="add-button">Add</button>
      </div>
    `;
    
    dishList.appendChild(dishCard);
  }

  // Update the current index
  currentIndex += 3;

  // Hide the "Load More" button if all dishes are loaded
  if (currentIndex >= dishes.length) {
    document.getElementById('load-more').style.display = 'none';
  }
}

// Event listener for "Load More" button
document.getElementById('load-more').addEventListener('click', loadMoreDishes);

// SEARCH BAR

function handleKeyPress(event) {
    if (event.key === 'Enter') {
      const query = document.getElementById('search-input').value;
      window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    }
  }