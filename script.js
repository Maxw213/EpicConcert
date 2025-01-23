// Get the ticket button
const ticketBtn = document.querySelector('.ticket-btn');

// Add event listener to the ticket button
ticketBtn.addEventListener('click', () => {
    // Open a new tab with the ticket purchase page
    window.open('https://example.com/tickets', '_blank');
});