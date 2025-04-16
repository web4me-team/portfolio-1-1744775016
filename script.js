// Finance Template JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    handlePublicationLinks();
    initResearchInterestsAnimation();
    
    // Handle hamburger menu toggling
    const menuToggle = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.nav-links');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
}); 

// Initialize animations for page elements
function initAnimations() {
    // Animate on scroll for skill progress bars
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Use the original width that was stored in the data attribute
                entry.target.style.width = entry.target.dataset.originalWidth;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        // Store the original width in a data attribute
        const originalWidth = bar.style.width;
        bar.dataset.originalWidth = originalWidth;
        // Set width to 0 initially
        bar.style.width = '0%';
        // Observe the element
        observer.observe(bar);
    });
    
    // Fade in animations for cards and sections
    const fadeElements = document.querySelectorAll('.experience-card, .project-card, .education-item, .publication-card, .teaching-card, .award-card, .skill-card, .contact-card');
    
    fadeElements.forEach(element => {
        element.classList.add('fade-element');
    });
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
}

// Handle publication links
function handlePublicationLinks() {
    const pubLinks = document.querySelectorAll('.publication-link');
    
    pubLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // In a real application, this would link to the actual publication
            // For demo purposes, prevent default and show a message
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
                alert('This would link to the publication in a real application.');
            }
        });
    });
}

// Initialize animations for research interests
function initResearchInterestsAnimation() {
    const researchInterests = document.querySelectorAll('.research-interest');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    researchInterests.forEach(item => {
        item.classList.add('fade-element');
        observer.observe(item);
    });
}

// Add CSS for animations
document.head.appendChild(document.createElement('style')).textContent = `
    .fade-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`; 