// Form success state for Netlify Forms
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form[name="waitlist"]');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const button = form.querySelector('button[type="submit"]');
      const emailInput = form.querySelector('input[type="email"]');
      const formData = new FormData(form);

      button.textContent = 'Joining...';
      button.disabled = true;

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then(response => {
        if (response.ok) {
          button.textContent = "You're on the list";
          emailInput.disabled = true;
          emailInput.value = '';
          emailInput.placeholder = 'Confirmed';

          // Add success message
          const note = form.querySelector('.form-note');
          if (note) {
            note.textContent = "We'll email you when beta opens.";
            note.classList.add('form-success');
          }
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(error => {
        button.textContent = 'Join Waitlist';
        button.disabled = false;
        alert('Something went wrong. Please try again.');
      });
    });
  }
});
