document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    // Function to append a message to the chat box
    function appendMessage(text, isUserMessage) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        if (isUserMessage) {
            messageDiv.classList.add('user-message');
        } else {
            messageDiv.classList.add('bot-message');
        }
        messageDiv.textContent = text;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }

    // Function to handle user input
    async function handleUserInput() {
        const text = userInput.value.trim();
        if (text === '') return;

        appendMessage(text, true); // Append user message

        // Fetch bot response from an API
        try {
            const response = await fetch('https://api.example.com/getResponse', { // Replace with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: text }),
            });
            const data = await response.json();
            const botResponse = data.reply || 'Sorry, I did not understand that.';
            appendMessage(botResponse, false); // Append bot message
        } catch (error) {
            console.error('Error fetching data:', error);
            appendMessage('Sorry, there was an error. Please try again later.', false);
        }

        userInput.value = ''; // Clear input field
    }

    // Event listener for send button
    sendButton.addEventListener('click', handleUserInput);

    // Event listener for Enter key press
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    // Function to append a message to the chat box
    function appendMessage(text, isUserMessage) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        if (isUserMessage) {
            messageDiv.classList.add('user-message');
        } else {
            messageDiv.classList.add('bot-message');
        }
        messageDiv.textContent = text;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }

    // Function to handle user input
    async function handleUserInput() {
        const text = userInput.value.trim();
        if (text === '') return;

        appendMessage(text, true); // Append user message

        // Fetch bot response from an API
        try {
            const response = await fetch('https://api.example.com/getResponse', { // Replace with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: text }),
            });
            const data = await response.json();
            const botResponse = data.reply || 'Sorry, I did not understand that.';
            appendMessage(botResponse, false); // Append bot message
        } catch (error) {
            console.error('Error fetching data:', error);
            appendMessage('Sorry, there was an error. Please try again later.', false);
        }

        userInput.value = ''; // Clear input field
    }

    // Event listener for send button
    sendButton.addEventListener('click', handleUserInput);

    // Event listener for Enter key press
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
});
