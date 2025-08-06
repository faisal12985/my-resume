// Professional Resume Enhancement Script

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for any internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll (optional)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Print optimization
    window.addEventListener('beforeprint', function() {
        // Reset any animations for print
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'none';
        });
    });

    // Add click-to-copy functionality for contact info (optional)
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            // Only copy if it looks like an email or phone
            if (text.includes('@') || text.includes('+')) {
                navigator.clipboard.writeText(text).then(() => {
                    // Optional: Show a brief confirmation
                    const originalText = this.innerHTML;
                    this.innerHTML = '📋 Copied!';
                    setTimeout(() => {
                        this.innerHTML = originalText;
                    }, 1500);
                }).catch(err => {
                    console.log('Could not copy text');
                });
            }
        });
    });

    // Keyboard navigation enhancement
    document.addEventListener('keydown', function(e) {
        // Press 'P' to open print dialog
        if (e.key === 'p' || e.key === 'P') {
            if (e.ctrlKey || e.metaKey) {
                // Let browser handle Ctrl+P normally
                return;
            }
            e.preventDefault();
            window.print();
        }
    });

    // Add a simple loading animation (if needed)
    const resumeContainer = document.querySelector('.resume-container');
    if (resumeContainer) {
        resumeContainer.style.opacity = '0';
        resumeContainer.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            resumeContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            resumeContainer.style.opacity = '1';
            resumeContainer.style.transform = 'translateY(0)';
        }, 100);
    }

    // Console message for developers
    console.log('%c🎯 Professional Resume Template', 'color: #667eea; font-size: 16px; font-weight: bold;');
    console.log('%cTip: Press Ctrl+P to generate PDF', 'color: #4a5568; font-size: 12px;');
});

// Utility function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to format phone numbers (if needed)
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}

// Export functions for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        formatPhoneNumber
    };
}
