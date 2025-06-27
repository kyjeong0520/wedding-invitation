// This file contains the JavaScript code for the wedding invitation.
// It may include functionality for interactive elements, such as form submissions or animations.

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-button');
    const form = document.getElementById('invitation-form');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (name && message) {
            alert(`Thank you, ${name}! Your message has been received.`);
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});