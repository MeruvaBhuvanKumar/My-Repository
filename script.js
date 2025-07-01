document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('mainNav');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li');

    // Function to handle scroll event for navigation bar
    const handleScroll = () => {
        if (window.scrollY > 50) { // Change 50 to the scroll distance you prefer
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    };

    // Function to toggle navigation for mobile
    const toggleNav = () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        // Animate links
        navLinkItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    };

    // Event Listeners
    window.addEventListener('scroll', handleScroll);
    burger.addEventListener('click', toggleNav);

    // Close nav when a link is clicked (for mobile)
    navLinkItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                toggleNav(); // Close the menu
            }
        });
    });
});