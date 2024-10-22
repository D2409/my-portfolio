window.addEventListener('scroll', function() {
    const workItems = document.querySelectorAll('.work-item');
    const windowHeight = window.innerHeight;
    
    workItems.forEach(function(item, index) {
        const itemTop = item.getBoundingClientRect().top;
        
        if (itemTop < windowHeight - 100) {
            setTimeout(function() {
                item.classList.add('reveal');
            }, index * 500); // Delay each project by 500ms
        }
    });
});

