document.addEventListener('DOMContentLoaded', function () {
    const payButton = document.querySelector('.button');
    const nameInput = document.querySelector('input[placeholder="Enter your Name"]');
    const cardTypeSelect = document.querySelector('#card');
    const cardNumberInput = document.querySelector('input[placeholder="Enter your Card Number"]');
    const expireDateInput = document.querySelector('input[type="date"]');
    const cvvInput = document.querySelector('input[type="number=3"]');

    // Function to validate the payment form inputs
    function validatePaymentForm() {
        if (nameInput.value.trim() === "") {
            alert("Please enter the name of the cardholder.");
            return false;
        }
        if (cardTypeSelect.value === "") {
            alert("Please select the card type.");
            return false;
        }
        if (cardNumberInput.value.trim() === "" || cardNumberInput.value.length !== 16) {
            alert("Please enter a valid 16-digit card number.");
            return false;
        }
        if (expireDateInput.value === "") {
            alert("Please enter the expiration date.");
            return false;
        }
        if (cvvInput.value.trim() === "" || cvvInput.value.length !== 3) {
            alert("Please enter a valid 3-digit CVV.");
            return false;
        }
        return true;
    }

    // Add event listener to the Pay Now button
    payButton.addEventListener('click', function (event) {
        if (!validatePaymentForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            alert('Payment processed successfully!');
        }
    });
});