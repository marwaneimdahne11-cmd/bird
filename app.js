// Bird Haven - Premium Application Logic

document.addEventListener('DOMContentLoaded', () => {
    console.log('Bird Haven UI Initialized');

    initNavigation();
    initScrollReveal();
    initMobileMenu();
});

/**
 * Handle header transformation on scroll
 */
function initNavigation() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Reveal elements as they enter the viewport
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add 'reveal' class to sections and observe them
    const sections = document.querySelectorAll('section, .category-card, .feature');
    sections.forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });
}

/**
 * Mobile menu toggle functionality using Event Delegation
 */
function initMobileMenu() {
    console.log('Initializing Mobile Menu (Dropdown Mode)');

    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');

    if (!mobileNav) {
        console.warn('Mobile navigation element (#mobile-nav) not found');
        return;
    }

    // Toggle menu visibility
    function toggleMenu(isOpen) {
        if (isOpen === undefined) {
            isOpen = !mobileNav.classList.contains('active');
        }

        if (isOpen) {
            mobileNav.classList.add('active');
            if (overlay) overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('Mobile menu opened');
        } else {
            mobileNav.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = '';
            console.log('Mobile menu closed');
        }
    }

    // Single event listener on document for all menu-related clicks
    document.addEventListener('click', (e) => {
        const target = e.target;

        // Open/Toggle button click
        if (target.closest('#mobile-menu-btn')) {
            e.preventDefault();
            toggleMenu(); // Toggles based on current state
        }

        // Close button click (if exists)
        if (target.closest('#mobile-nav-close')) {
            e.preventDefault();
            toggleMenu(false);
        }

        // Overlay click
        if (target === overlay) {
            toggleMenu(false);
        }

        // Navigation link click
        if (target.closest('.mobile-nav-links a')) {
            toggleMenu(false);
        }
    });

    console.log('Mobile menu dropdown listeners attached');
}



