document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stickyBanner = document.querySelector('.sticky-banner'); // The sticky banner
    const checkScrollPosition = () => {
        const documentHeight = document.documentElement.scrollHeight; // Total height of the document
        const windowHeight = window.innerHeight; // Height of the viewport
        const scrollPosition = window.scrollY + windowHeight; // Current scroll position

        // Check if the user has reached the bottom of the page
        if (scrollPosition >= documentHeight) {
            stickyBanner.classList.add('hidden'); // Hide the banner
        } else {
            stickyBanner.classList.remove('hidden'); // Show the banner
        }
    };

    // Listen for scroll events
    window.addEventListener('scroll', checkScrollPosition);

    // Also check on resize to ensure the layout and scroll height are correctly detected
    window.addEventListener('resize', checkScrollPosition);

    // Initial check in case the user loads the page near the bottom
    checkScrollPosition();
});


