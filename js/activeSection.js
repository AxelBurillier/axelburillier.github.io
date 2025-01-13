document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('#navbar a');
    
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                const currentLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
});