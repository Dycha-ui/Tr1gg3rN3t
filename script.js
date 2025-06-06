// Płynne przewijanie do sekcji
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efekt hover na karty produktów
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        // Przekierowanie do podstrony (np. rockstar.html)
        const productName = this.querySelector('h3').textContent.toLowerCase();
        window.location.href = `${productName}.html`;
    });
});