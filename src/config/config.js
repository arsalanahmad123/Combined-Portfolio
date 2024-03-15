import { createChatBotMessage } from 'react-chatbot-kit'

const config = {
    botName: 'My Portfolio Chatbot',
    // Array of message objects defining the conversation flow
    messages: [
        createChatBotMessage(
            'Hi! Welcome to my portfolio. How can I help you today?',
        ),
        // Add more message objects here based on your conversation flow design
    ],
    // Define user interface options
    userTyping: true, // Show user typing indicator
    avatar: 'none', // Remove default avatar
    // ... other configuration options (refer to documentation)
}

export default config
