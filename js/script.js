// Debounce function to limit how often the scroll event fires
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Function to reveal work items on scroll
function revealWorkItems() {
    const workItems = document.querySelectorAll('.work-item');
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 768;

    workItems.forEach(function(item, index) {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < windowHeight - 100) {
            setTimeout(function() {
                item.classList.add('reveal');
            }, index * (isMobile ? 300 : 500)); // Faster delay for mobile
        }
    });
}

// Apply debounce to the scroll event listener
window.addEventListener('scroll', debounce(revealWorkItems));
