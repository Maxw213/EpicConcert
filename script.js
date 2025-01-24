// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Get the ticket button
const ticketBtn = document.querySelector('.ticket-btn');

// Add event listener to the ticket button
ticketBtn.addEventListener('click', () => {
    // Open a new tab with the ticket purchase page
    window.open('https://example.com/tickets', '_blank');
});
;document.addEventListener("DOMContentLoaded", function() {
    const buyTicketsButton = document.getElementById("buy-tickets");

    buyTicketsButton.addEventListener("click", function() {
        alert("Redirecting to the ticket purchase page!");
        window.location.href = "tickets.html"; // Ensure this page exists
    });
});
