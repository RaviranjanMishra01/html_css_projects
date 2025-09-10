  document.addEventListener('DOMContentLoaded', function() {
            // Get elements
            const menuBtn = document.getElementById('menuBtn');
            const navMenu = document.getElementById('navMenu');
            const mobileOverlay = document.getElementById('mobileOverlay');

            // Check if elements exist
            if (!menuBtn || !navMenu || !mobileOverlay) {
                console.log('Menu elements not found');
                return;
            }

            // Toggle mobile menu function
            function toggleMenu() {
                const isActive = navMenu.classList.contains('active');
                
                if (isActive) {
                    // Close menu
                    navMenu.classList.remove('active');
                    mobileOverlay.classList.remove('active');
                    menuBtn.innerHTML = '☰';
                    document.body.style.overflow = 'auto'; // Allow scrolling
                } else {
                    // Open menu
                    navMenu.classList.add('active');
                    mobileOverlay.classList.add('active');
                    menuBtn.innerHTML = '✕';
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                }
            }

            // Menu button click event
            menuBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleMenu();
            });

            // Close menu when clicking overlay
            mobileOverlay.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileOverlay.classList.remove('active');
                menuBtn.innerHTML = '☰';
                document.body.style.overflow = 'auto';
            });

            // Close menu when clicking menu items
            const menuItems = navMenu.querySelectorAll('li');
            menuItems.forEach(function(item) {
                item.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    mobileOverlay.classList.remove('active');
                    menuBtn.innerHTML = '☰';
                    document.body.style.overflow = 'auto';
                });
            });

            // Close menu on window resize (if desktop)
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    navMenu.classList.remove('active');
                    mobileOverlay.classList.remove('active');
                    menuBtn.innerHTML = '☰';
                    document.body.style.overflow = 'auto';
                }
            });

            // Smooth scrolling for scroll arrow
            const scrollArrow = document.querySelector('.scroll-arrow');
            if (scrollArrow) {
                scrollArrow.addEventListener('click', function() {
                    const servicesSection = document.querySelector('.services');
                    if (servicesSection) {
                        servicesSection.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            }

            // Add click outside to close menu
            document.addEventListener('click', function(e) {
                if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        mobileOverlay.classList.remove('active');
                        menuBtn.innerHTML = '☰';
                        document.body.style.overflow = 'auto';
                    }
                }
            });
        });