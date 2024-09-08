function toggleForm() {
    var loginForm = document.getElementById('login-form');
    var signUpForm = document.getElementById('signup-form');

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signUpForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signUpForm.style.display = "block";
    }
}

function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    alert("Logging in with Username: " + username + " and Password: " + password);
    // Add your login logic here
}

function signUp() {
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;

    alert("Signing up with Username: " + username + " and Password: " + password);
    // Add your sign-up logic here
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('login-form').style.display = "block";
});