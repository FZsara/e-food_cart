document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const hiddenItems = document.querySelectorAll('.items-grid .hidden');
    let isExpanded = false;

    toggleButton.addEventListener('click', function() {
        if (isExpanded) {
            // Hide extra items
            hiddenItems.forEach(item => item.style.display = 'none');
            toggleButton.innerHTML = 'See More Products';
        } else {
            // Show extra items
            hiddenItems.forEach(item => item.style.display = 'block');
            toggleButton.innerHTML = 'See Less Products';
        }
        isExpanded = !isExpanded;
    });
});

// Function to handle the Add to Cart button click
function addToCart(event) {
    const itemCard = event.target.closest('.item');
    const itemName = itemCard.querySelector('h3').textContent;
    const itemPrice = itemCard.querySelector('.item-price').textContent;
    
    // Store item details in local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Redirect to cart page
    window.location.href = 'cart.html';
}

// Add event listeners to all Add to Cart buttons
document.querySelectorAll('.item button').forEach(button => {
    button.addEventListener('click', addToCart);
});



document.addEventListener("DOMContentLoaded", function() 
{

    document.addEventListener('DOMContentLoaded', function() {
        const wrappers = document.querySelectorAll('.wrapper');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentIndex = 0;
      
        function updateSlider() {
            const translateXValue = -currentIndex * 100;
            wrappers.forEach((wrapper) => {
                wrapper.style.transform = `translateX(${translateXValue}%)`;
            });
        }
      
        nextButton.addEventListener('click', () => {
            if (currentIndex < wrappers.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to the first slide
            }
            updateSlider();
        });
      
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = wrappers.length - 1; // Loop to the last slide
            }
            updateSlider();
        });
      });
    const subscribeBtn = document.getElementById("subscribe-btn");
    const subscribeMessage = document.getElementById("subscribe-message");

    subscribeBtn.addEventListener("click", () => {
        subscribeMessage.textContent = "Subscribed successfully!";
        subscribeMessage.style.display = "block";
    });

});

document.querySelector('.footer-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = this.querySelector('input').value;
    alert('Thank you for subscribing with ' + email);
    this.querySelector('input').value = ''; // Clear the input field after submission
  });
  



















