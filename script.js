// Initialize Lucide icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for header
    const text = "Hi, I'm Miguel Araújo De Souza 😁";
    const typingText = document.getElementById('typing-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent = text.substring(0, i + 1);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Skills carousel
    const carousel = document.querySelector('.skills-carousel');
    if (carousel) {
        setInterval(() => {
            const firstItem = carousel.firstElementChild;
            carousel.appendChild(firstItem);
            firstItem.classList.add('slide-out');
            setTimeout(() => firstItem.classList.remove('slide-out'), 500);
        }, 3000);
    }

    // Navigation and section visibility
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.section');

    function setActiveSection(sectionId) {
        navButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.section === sectionId);
        });

        sections.forEach(section => {
            section.classList.toggle('active', section.id === sectionId);
            if (section.id === sectionId) {
                animateElements(section);
            }
        });
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.dataset.section;
            setActiveSection(sectionId);
        });
    });

    // Scroll progress indicator
    const progressBar = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });

    // Skill cards interaction
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const tags = card.querySelectorAll('.skill-tag');
            tags.forEach((tag, index) => {
                const proficiency = tag.dataset.proficiency;
                setTimeout(() => {
                    tag.style.background = `linear-gradient(to right, rgba(239, 68, 68, 0.5) ${proficiency}%, rgba(127, 29, 29, 0.3) ${proficiency}%)`;
                }, index * 100);
            });
        });

        card.addEventListener('mouseleave', () => {
            const tags = card.querySelectorAll('.skill-tag');
            tags.forEach(tag => {
                tag.style.background = 'rgba(127, 29, 29, 0.3)';
            });
        });
    });

    // Animate elements on scroll
    function animateElements(container) {
        const elements = container.querySelectorAll('.animate-on-scroll');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('fade-in');
            }, index * 200);
        });
    }

    // Initialize animations for visible section
    const activeSection = document.querySelector('.section.active');
    if (activeSection) {
        animateElements(activeSection);
    }

    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Social links hover effect
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.05)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });
     // Contact form handling
     const contactForm = document.getElementById('contact-form');
     if (contactForm) {
         contactForm.addEventListener('submit', (e) => {
             e.preventDefault();
             const formData = {
                 name: document.getElementById('name').value,
                 email: document.getElementById('email').value,
                 message: document.getElementById('message').value
             };
             
             // Simulate form submission
             const submitBtn = contactForm.querySelector('.submit-btn');
             submitBtn.textContent = 'Sending...';
             submitBtn.disabled = true;
 
             setTimeout(() => {
                 alert('Message sent successfully!');
                 contactForm.reset();
                 submitBtn.textContent = 'Send Message';
                 submitBtn.disabled = false;
             }, 1500);
         });
     }
});