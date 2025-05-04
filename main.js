// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the form from actually submitting

            // Simple Validation
            const name = contactForm.elements['name'].value.trim();
            const email = contactForm.elements['email'].value.trim();
            const message = contactForm.elements['message'].value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Show success message
            alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');

            // Optionally clear form fields
            contactForm.reset();
        });
    }
});
