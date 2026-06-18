var applicationForm = document.getElementById('applicationForm');

if (applicationForm) {
    applicationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = 'confirmation.html';
    });
}
