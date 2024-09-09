document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('.button');
    const nameInput = document.querySelector('input[placeholder="Enter your name"]');
    const mobileInput = document.querySelector('input[placeholder="Enter your mobile number"]');
    const genderSelect = document.querySelector('#gen');
    const emailInput = document.querySelector('input[placeholder="Enter your email id"]');
    const dobInput = document.querySelector('input[placeholder="Enter your Date of Birth"]');
    const countryInput = document.querySelector('input[placeholder="Enter your Country"]');
    const districtInput = document.querySelector('input[placeholder="Enter your District"]');
    const cityInput = document.querySelector('input[placeholder="Enter your City"]');
    const durationSelect = document.querySelector('#Duration');

    // Function to validate the form inputs
    function validateForm() {
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            return false;
        }
        if (mobileInput.value.trim() === "" || mobileInput.value.length < 10) {
            alert("Please enter a valid mobile number.");
            return false;
        }
        if (emailInput.value.trim() === "") {
            alert("Please enter your email.");
            return false;
        }
        if (dobInput.value === "") {
            alert("Please select your date of birth.");
            return false;
        }
        if (countryInput.value.trim() === "") {
            alert("Please enter your country.");
            return false;
        }
        if (districtInput.value.trim() === "") {
            alert("Please enter your district.");
            return false;
        }
        if (cityInput.value.trim() === "") {
            alert("Please enter your city.");
            return false;
        }
        return true;
    }

    // Add event listener to the submit button
    submitButton.addEventListener('click', function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            alert('Form submitted successfully!');
        }
    });
});