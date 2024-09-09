// Get the input fields and the submit button
const emailOrUsernameInput = document.getElementById('value1');
const passwordInput = document.getElementById('value2');
const signInButton = document.getElementById('three');

// Add an event listener to the submit button
signInButton.addEventListener('click', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the input values
  const emailOrUsername = emailOrUsernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate the input fields
  if (emailOrUsername === '') {
    alert('Please enter your email or username');
    return;
  }

  if (password === '') {
    alert('Please enter your password');
    return;
  }

  // You can add additional validation for the email or username format if needed

  // If all validations pass, submit the form
  const formData = {
    emailOrUsername,
    password,
  };

  // You can send the form data to a server using the fetch API or XMLHttpRequest
  console.log(formData);

  // Redirect to the index4.html page
  window.location.href = 'index4.html';
});