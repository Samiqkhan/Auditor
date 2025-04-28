document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Toggle menu icon (hamburger to X)
            const menuIcon = this.querySelector('.menu-icon');
            if (menuIcon) {
                menuIcon.classList.toggle('active');
            }
        });
    }
    
    // Mobile Dropdown Toggles
    const mobileDropdownButtons = document.querySelectorAll('.mobile-dropdown-button');
    
    mobileDropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Find the next sibling which is the dropdown content
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent && dropdownContent.classList.contains('mobile-dropdown-content')) {
                dropdownContent.classList.toggle('active');
            }
        });
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Find the next sibling which is the answer
            const answer = this.nextElementSibling;
            if (answer && answer.classList.contains('faq-answer')) {
                answer.classList.toggle('active');
            }
        });
    });
    
    // Testimonial Carousel
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    if (testimonialSlider && prevButton && nextButton) {
        let currentIndex = 0;
        const testimonials = testimonialSlider.querySelectorAll('.testimonial-card');
        const totalTestimonials = testimonials.length;
        
        // Function to update the visible testimonials based on screen size
        function updateVisibleTestimonials() {
            const windowWidth = window.innerWidth;
            let visibleCount = 1;
            
            if (windowWidth >= 1024) {
                visibleCount = 3;
            } else if (windowWidth >= 768) {
                visibleCount = 2;
            }
            
            // Hide all testimonials first
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });
            
            // Show the visible ones
            for (let i = 0; i < visibleCount; i++) {
                const index = (currentIndex + i) % totalTestimonials;
                testimonials[index].style.display = 'block';
            }
        }
        
        // Initialize
        updateVisibleTestimonials();
        
        // Previous button click
        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
            updateVisibleTestimonials();
        });
        
        // Next button click
        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % totalTestimonials;
            updateVisibleTestimonials();
        });
        
        // Update on window resize
        window.addEventListener('resize', updateVisibleTestimonials);
    }
    
    // Process Steps Animation
    const processSteps = document.querySelectorAll('.process-step');
    
    if (processSteps.length > 0) {
        // Add animation classes with delay
        processSteps.forEach((step, index) => {
            setTimeout(() => {
                step.classList.add('animate');
            }, index * 200);
        });
    }
    
    // Form Validation
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const requiredFields = this.querySelectorAll('input, textarea');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Form is valid, you can submit it or show success message
                alert('Thank you for your message. We will get back to you soon!');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});