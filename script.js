document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Redirect to the confirmation page
    window.location.href = 'confirmation.html';
});
