// Global function for mobile menu toggle
window.toggleMobileMenu = function () {
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');

    if (mobileNav) {
        const isOpen = mobileNav.classList.toggle('active');

        // Apply inline styles as fallback for CSS transitions
        if (isOpen) {
            mobileNav.style.opacity = '1';
            mobileNav.style.visibility = 'visible';
            mobileNav.style.pointerEvents = 'all';
            mobileNav.style.display = 'block';
            mobileNav.style.transform = 'translateX(-50%) translateY(0)';
        } else {
            mobileNav.style.opacity = '0';
            mobileNav.style.visibility = 'hidden';
            mobileNav.style.pointerEvents = 'none';
            mobileNav.style.transform = 'translateX(-50%) translateY(-10px)';
        }

        if (overlay) {
            overlay.classList.toggle('active');
            overlay.style.opacity = isOpen ? '1' : '0';
            overlay.style.visibility = isOpen ? 'visible' : 'hidden';
        }

        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initMobileMenu();
    initNavigation();
    initScrollReveal();
    initNewsletter();
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
    if (!('IntersectionObserver' in window)) return;

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

    if (!mobileNav || !btn) return;

    btn.addEventListener('click', () => {
        window.toggleMobileMenu();
    });

    if (overlay) {
        overlay.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                window.toggleMobileMenu();
            }
        });
    }

    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = '';

                // Reset inline styles
                mobileNav.style.opacity = '0';
                mobileNav.style.visibility = 'hidden';
                mobileNav.style.pointerEvents = 'none';
                mobileNav.style.transform = 'translateX(-50%) translateY(-10px)';
                if (overlay) {
                    overlay.style.opacity = '0';
                    overlay.style.visibility = 'hidden';
                }
            }
        });
    });
}

/**
 * Newsletter form handling with Formspree
 */
function initNewsletter() {
    const forms = document.querySelectorAll('.newsletter-form');
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            // For Formspree, if we want to stay on the page, we use fetch
            e.preventDefault();

            const input = form.querySelector('input[type="email"]');
            const button = form.querySelector('button');
            const url = form.action || 'https://formspree.io/f/your_email';

            if (input && input.value.trim() !== "") {
                const originalContent = button.innerHTML;
                button.disabled = true;
                button.innerHTML = '<i data-lucide="loader"></i> Envoi...';
                lucide.createIcons();

                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        body: new FormData(form),
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        button.innerHTML = '<i data-lucide="check"></i> Merci !';
                        button.classList.add('btn-success');
                        input.value = "";
                    } else {
                        throw new Error('Formspree error');
                    }
                } catch (error) {
                    button.innerHTML = '<i data-lucide="alert-circle"></i> Erreur';
                    button.classList.add('btn-error');
                } finally {
                    lucide.createIcons();
                    setTimeout(() => {
                        button.disabled = false;
                        button.innerHTML = originalContent;
                        button.classList.remove('btn-success', 'btn-error');
                        lucide.createIcons();
                    }, 3000);
                }
            }
        });
    });
}
