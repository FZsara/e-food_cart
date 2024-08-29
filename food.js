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
    const itemImage = itemCard.querySelector('img').src; // Get the image source
    
    // Store item details in local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name: itemName, price: itemPrice, image: itemImage });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Show an alert that the item has been added to the cart
    alert(`${itemName} is added to cart.`);
    
}

// Add event listeners to all Add to Cart buttons
document.querySelectorAll('.item button').forEach(button => {
    button.addEventListener('click', addToCart);
});

document.addEventListener("DOMContentLoaded", function() {
    const testimonials = [
        {
            name: "Willians Jhone",
            title: "CEO & Co-Founder",
            quote: "Deliciously healthy",
            personImage: "man.png",
            foodImage: "fast-food-banner.png"
        },
        {
            name: "Emily Doe",
            title: "Marketing Head",
            quote: "Top-Notch!!",
            personImage: "woman.png",
            foodImage: "fast-food-banner.png"
        },
        {
            name: "John Smith",
            title: "Product Manager",
            quote: "Services Amazing",
            personImage: "man.png",
            foodImage: "fast-food-banner.png"
        },
        {
            name: "Jane Doe",
            title: "Sales Manager",
            quote: "Gonna back again!",
            personImage: "woman.png",
            foodImage: "fast-food-banner.png"
        }
    ];

    let currentIndex = 0;

    const testimonialElement = document.getElementById("testimonial");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    function updateTestimonial(index) {
        const testimonial = testimonials[index];
        testimonialElement.querySelector("h4").textContent = testimonial.name;
        testimonialElement.querySelector("p").textContent = testimonial.title;
        testimonialElement.querySelector("blockquote").textContent = testimonial.quote;
        testimonialElement.querySelector(".person-image img").src = testimonial.personImage;
        testimonialElement.querySelector(".testimonial-image img").src = testimonial.foodImage;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        updateTestimonial(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        updateTestimonial(currentIndex);
    });



    const subscribeBtn = document.getElementById("subscribe-btn");
    const subscribeMessage = document.getElementById("subscribe-message");

    subscribeBtn.addEventListener("click", () => {
        subscribeMessage.textContent = "Subscribed successfully!";
        subscribeMessage.style.display = "block";
    });

    // Initialize first testimonial
    updateTestimonial(currentIndex);
});

document.querySelector('.footer-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = this.querySelector('input').value;
    alert('Thank you for subscribing with ' + email);
    this.querySelector('input').value = ''; // Clear the input field after submission
  });
  



















