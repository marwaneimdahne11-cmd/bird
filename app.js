// Bird Haven - Premium Application Logic

// Global function for emergency click handling
window.toggleMobileMenu = function () {
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    if (mobileNav) {
        const isOpen = mobileNav.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
        document.body.style.overflow = isOpen ? 'hidden' : '';
        console.log('Mobile menu toggled via global function', isOpen);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('Bird Haven UI Initialized');

    // 1. Initialize Mobile Menu FIRST for maximum reliability
    try {
        initMobileMenu();
    } catch (err) {
        console.error('Error initializing mobile menu:', err);
    }

    // 2. Initialize other components
    initNavigation();
    initScrollReveal();
});

/**
 * Handle header transformation on scroll
 */
function initNavigation() {
    const header = document.querySelector('header');
    if (!header) return;

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
 * Mobile menu toggle functionality
 */
function initMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    const btn = document.getElementById('mobile-menu-btn');

    if (!mobileNav || !btn) {
        console.warn('Mobile menu elements not found');
        return;
    }

    // Toggle button handler - no preventDefault needed for button
    function toggleMenu() {
        window.toggleMobileMenu();
    }

    // Button click
    btn.addEventListener('click', toggleMenu);

    // Close on overlay click
    if (overlay) {
        overlay.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                window.toggleMobileMenu();
            }
        });
    }

    // Handle navigation links - they should navigate normally
    // Just close the menu, don't prevent default behavior
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Don't prevent default - let the link navigate
            // Just close the menu
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            // Navigation happens automatically via href
        });
    });

    console.log('Mobile menu initialized');
}

