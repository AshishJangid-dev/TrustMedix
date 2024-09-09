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
    function handleUserInput() {
        const text = userInput.value.trim();
        if (text === '') return;

        appendMessage(text, true); // Append user message

        // Simulate bot response
        setTimeout(() => {
            let botResponse = '';
            switch (text.toLowerCase()) {
                case 'hello':
                    botResponse = 'Hi there! How can I help you today?';
                    break;
                case 'how are you?':
                    botResponse = 'I am just a bot, but I am doing fine. Thanks for asking!';
                    break;
                case 'what is your name?':
                    botResponse = 'I am a chatbot created to help you!';
                    break;
                default:
                    botResponse = 'Sorry, I did not understand that.';
                    break;
            }
            appendMessage(botResponse, false); // Append bot message
        }, 1000);

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
