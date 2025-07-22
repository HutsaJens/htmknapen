// HTMknapen Router and Navigation System
class Router {
    constructor() {
        this.routes = {
            '/': 'home',
            '/home': 'home',
            '/solutions': 'solutions',
            '/team': 'team'
        };
        
        this.currentRoute = null;
        this.init();
    }

    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            this.handleRoute(window.location.pathname);
        });

        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link') || e.target.hasAttribute('data-route')) {
                e.preventDefault();
                const route = e.target.getAttribute('href') || '/' + e.target.getAttribute('data-route');
                this.navigate(route);
            }
        });

        // Handle mobile menu toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }

        // Load initial route
        this.handleRoute(window.location.pathname);
    }

    navigate(path) {
        if (path !== this.currentRoute) {
            window.history.pushState({}, '', path);
            this.handleRoute(path);
        }
    }

    handleRoute(path) {
        const route = this.routes[path] || this.routes['/'];
        this.currentRoute = path;
        this.loadPage(route);
        this.updateActiveNav(path);
    }

    loadPage(pageName) {
        const app = document.getElementById('app');
        const template = document.getElementById(`${pageName}-template`);
        
        if (template && app) {
            // Fade out current content
            app.style.opacity = '0';
            
            setTimeout(() => {
                // Use innerHTML directly since template.content doesn't work as expected
                app.innerHTML = template.innerHTML;
                
                // Fade in new content
                app.style.opacity = '1';
                
                // Scroll to top
                window.scrollTo(0, 0);
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const navToggle = document.querySelector('.nav-toggle');
                if (navMenu && navToggle) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
                
                // Re-initialize image loading for new content
                ImageLoader.init();
            }, 150);
        }
    }

    updateActiveNav(path) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to current nav link
        const activeLink = document.querySelector(`.nav-link[href="${path}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

// Image lazy loading and optimization
class ImageLoader {
    static init() {
        const images = document.querySelectorAll('img[src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                    });
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            img.classList.add('loading');
            imageObserver.observe(img);
        });
    }
}

// Smooth animations
class AnimationController {
    static init() {
        // Add scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements that should animate
        const animateElements = document.querySelectorAll('.feature-card, .member, .gallery-item, .product-showcase');
        animateElements.forEach(el => observer.observe(el));
    }
}

// Initialize function
function initializeApp() {
    // Initialize router
    new Router();
    
    // Initialize image loading
    ImageLoader.init();
    
    // Initialize animations
    AnimationController.init();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize when DOM is ready or already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already loaded
    initializeApp();
}
