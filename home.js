// JavaScript code

// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Add click event handler to "ADD TO CART" buttons
const addToCartButtons = document.querySelectorAll('.cart-btn');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Add logic to handle adding products to the cart
    // You can use the product information to perform the necessary actions
    // such as sending a request to the server to add the product to the cart
    // or updating the UI to reflect the change
  });
});

// Add click event handler to the "SUBSCRIBE" button
const subscribeButton = document.querySelector('.subscribe-container input[type="submit"]');
const emailInput = document.getElementById('email-subscribe');

subscribeButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = emailInput.value;

  // Add logic to handle the subscription
  // You can use the email value to perform the necessary actions
  // such as sending a request to the server to subscribe the user
  // or displaying a success message
  
  emailInput.value = ''; // Clear the input field after submitting
});
