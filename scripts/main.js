// login.js

document.addEventListener('DOMContentLoaded', () => {
  const signInButton = document.querySelector('.button');
  const emailOrUsernameInput = document.getElementById('value1');
  const passwordInput = document.getElementById('value2');

  signInButton.addEventListener('click', (event) => {
      // Prevent the default action of the button if validation fails
      if (!validateForm()) {
          event.preventDefault(); // Prevent navigation if validation fails
          return;
      }

      // If validation passes, allow navigation or perform any other actions
      // For example, redirect to another page (if needed):
      // window.location.href = 'index2.html'; // Assuming you want to navigate to this page
  });

  function validateForm() {
      const emailOrUsername = emailOrUsernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (emailOrUsername === '' || password === '') {
          alert('Please enter both email/username and password.');
          return false;
      }

      // Additional validation can be added here if needed (e.g., regex for email format)

      return true;
  }
});