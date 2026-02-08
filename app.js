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
 * Mobile menu toggle functionality
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    const closeBtn = document.getElementById('mobile-nav-close');

    console.log('Mobile Menu Init:', { menuBtn, mobileNav, overlay, closeBtn });

    if (!menuBtn || !mobileNav) {
        console.warn('Mobile menu elements not found');
        return;
    }

    function openMenu(e) {
        if (e) e.preventDefault();
        console.log('Opening mobile menu');
        mobileNav.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu(e) {
        if (e) e.preventDefault();
        console.log('Closing mobile menu');
        mobileNav.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Use direct event listeners for better reliability
    menuBtn.onclick = openMenu;
    if (closeBtn) closeBtn.onclick = closeMenu;
    if (overlay) overlay.onclick = closeMenu;

    // Close menu on link click
    const mobileLinks = mobileNav.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.onclick = closeMenu;
    });
}

