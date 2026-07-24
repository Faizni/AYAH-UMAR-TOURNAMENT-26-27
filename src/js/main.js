document.addEventListener('DOMContentLoaded', () => {
            // Set current year in footer
            document.getElementById('year').textContent = new Date().getFullYear();

            // Mobile menu toggle
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const links = document.querySelectorAll('.mobile-link');
            const icon = btn.querySelector('i');

            function toggleMenu() {
                menu.classList.toggle('hidden');
                if (menu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }

            btn.addEventListener('click', toggleMenu);

            // Close mobile menu when a link is clicked
            links.forEach(link => {
                link.addEventListener('click', () => {
                    if (!menu.classList.contains('hidden')) {
                        toggleMenu();
                    }
                });
            });

            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-brand-dark/90', 'backdrop-blur-md', 'shadow-lg');
                    navbar.classList.remove('glass-panel');
                } else {
                    navbar.classList.remove('bg-brand-dark/90', 'backdrop-blur-md', 'shadow-lg');
                    navbar.classList.add('glass-panel');
                }
            });

            // Simple intersection observer for fade-in animations on scroll
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Add animation classes to elements initially
            const animateElements = document.querySelectorAll('.champion-card, section h2, section h3, .glass-panel');
            animateElements.forEach(el => {
                // Skip navbar glass-panel
                if(el.tagName.toLowerCase() !== 'header') {
                    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
                    observer.observe(el);
                }
            });
        });

