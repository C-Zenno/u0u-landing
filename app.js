// Form submission handling (Netlify handles the actual submission)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form[name="waitlist"]');

  if (form) {
    form.addEventListener('submit', function(e) {
      // Let Netlify handle the actual submission
      // This just provides visual feedback

      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;

      // Show loading state
      button.textContent = 'Joining...';
      button.disabled = true;

      // Netlify will redirect to a success page or handle via AJAX
      // For custom success handling, you can use fetch:
      /*
      e.preventDefault();
      const formData = new FormData(form);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then(() => {
        form.innerHTML = '<p class="success">You\'re on the list! We\'ll be in touch.</p>';
      })
      .catch((error) => {
        button.textContent = originalText;
        button.disabled = false;
        alert('Something went wrong. Please try again.');
      });
      */
    });
  }
});
