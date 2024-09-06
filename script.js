```javascript
// Add to cart functionality
const buyButtons = document.querySelectorAll('.product button');

buyButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const product = event.target.closest('.product');
    const productName = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('p').textContent;
    
    alert(`Added to cart: ${productName} - ${productPrice}`);
    // Here you would typically update a cart object and maybe show a cart icon with item count
}

// FAQ toggle functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('h3');
    question.addEventListener('click', toggleAnswer);
});

function toggleAnswer(event) {
    const answer = event.target.nextElementSibling;
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
```