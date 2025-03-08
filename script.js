// Initialize Lucide icons
lucide.createIcons();

// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.section');

    function setActiveSection(sectionId) {
        // Update button states
        navButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.section === sectionId);
        });

        // Update section visibility
        sections.forEach(section => {
            section.classList.toggle('active', section.id === sectionId);
        });
    }

    // Add click handlers to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.dataset.section;
            setActiveSection(sectionId);
        });
    });

    // Add hover effects to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.05)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });
});