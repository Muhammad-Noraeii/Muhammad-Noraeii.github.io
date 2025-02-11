document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple dynamic update (example)
    const heroContent = document.querySelector('#hero .hero-content');
    if (heroContent) {
        heroContent.classList.add('loaded'); // Add a class to trigger CSS animations
    }

    // Function to add a subtle fade-in effect on scroll
    function reveal() {
        let reveals = document.querySelectorAll(".reveal");

        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    // Listen for scroll events to trigger the fade-in effect
    window.addEventListener("scroll", reveal);

    // Add loaded class to project details page
    const projectDetails = document.querySelector('#project-details');
    if (projectDetails) {
        projectDetails.classList.add('loaded');
    }
});