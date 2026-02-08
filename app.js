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

    function toggle(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        window.toggleMobileMenu();
    }

    // Multi-event support (Click and Touch)
    btn.addEventListener('click', toggle, true);
    btn.addEventListener('touchstart', toggle, { passive: false });

    // Close on overlay or link click
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target === overlay || target.closest('.mobile-nav-links a')) {
            if (mobileNav.classList.contains('active')) {
                window.toggleMobileMenu();
            }
        }
    });

    console.log('Mobile menu listeners attached (Click + Touch)');
}

