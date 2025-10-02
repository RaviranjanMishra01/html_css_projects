 document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.fa-bars');
            const closeIcon = document.querySelector('.fa-xmark');
            const mobileMenu = document.querySelector('.mobile-menu');
            
            hamburger.addEventListener('click', function() {
                mobileMenu.classList.add('active');
                hamburger.style.display = 'none';
                closeIcon.style.display = 'block';
            });
            
            closeIcon.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                closeIcon.style.display = 'none';
                hamburger.style.display = 'block';
            });
            
            const menuLinks = document.querySelectorAll('.mobile-menu a');
            menuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    closeIcon.style.display = 'none';
                    hamburger.style.display = 'block';
                });
            });
        });