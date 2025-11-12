# CyberSaarthi ChatBot

## Overview
The CyberSaarthi ChatBot is an AI-powered assistant integrated into the CyberSaarthi application. It provides users with instant answers to cybersecurity-related questions.

## Features

### 🎨 UI Features
- **Floating Button**: A stylish floating action button appears at the bottom-right corner of all pages
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Elegant transitions and hover effects
- **Real-time Chat**: Interactive chat interface with message history
- **Typing Indicators**: Shows loading state while waiting for responses

### 🔧 Technical Features
- **Global Availability**: Integrated in the root layout, available on all pages
- **REST API Integration**: Connects to the backend RAG chat API
- **Error Handling**: Graceful error messages for connection issues
- **Auto-scroll**: Automatically scrolls to the latest message
- **Keyboard Support**: Press Enter to send messages

## Backend Integration

The chatbot connects to the backend API at:
```
POST http://127.0.0.1:8000/api/rag-chat/
```

**Request Format:**
```json
{
  "query": "user's question here"
}
```

**Response Format:**
```json
{
  "answer": "AI-generated response here"
}
```

## Usage

### For Users
1. Click the blue chat icon at the bottom-right corner
2. Type your cybersecurity question in the input field
3. Press Enter or click the Send button
4. Wait for the AI assistant to respond
5. Continue the conversation as needed
6. Click the X button to close the chat

### For Developers

#### Component Location
- **File**: `/src/Components/ChatBot.tsx`
- **Integration**: `/src/app/layout.tsx`

#### Customization

**Change Backend URL:**
```typescript
const response = await fetch("YOUR_BACKEND_URL/api/rag-chat/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query: inputValue }),
});
```

**Modify Styling:**
All styles use Tailwind CSS classes. Key styling areas:
- Floating button: `fixed bottom-6 right-6 z-50 p-4 rounded-full`
- Chat window: `fixed bottom-24 right-6 z-50 w-96 h-[600px]`
- Messages: Different styles for user vs bot messages

**Adjust Positioning:**
```typescript
// Floating button position
className="fixed bottom-6 right-6 z-50"

// Chat window position
className="fixed bottom-24 right-6 z-50"
```

## Dependencies

- `lucide-react`: Icons (MessageCircle, X, Send, Loader2)
- `next`: Next.js framework
- `react`: React library

## Error Handling

The chatbot handles the following error scenarios:
- **Backend not running**: Shows a friendly error message
- **Network errors**: Displays connection error
- **Invalid responses**: Falls back to default error message

## Future Enhancements

Potential improvements:
- [ ] Chat history persistence (localStorage/database)
- [ ] File upload support for document analysis
- [ ] Voice input/output
- [ ] Multi-language support
- [ ] Chat export functionality
- [ ] Suggested questions/quick replies
- [ ] Typing animation for bot responses
- [ ] Dark mode support

## Testing

**Test the chatbot:**
1. Ensure the backend server is running at `http://127.0.0.1:8000`
2. Open the application in your browser
3. Click the chatbot button
4. Try sample questions:
   - "What is phishing?"
   - "How can I protect my password?"
   - "What are the latest cybersecurity threats?"

## Troubleshooting

**Chatbot not appearing:**
- Check if `ChatBot` component is imported in `layout.tsx`
- Verify the component is rendered: `<ChatBot />`

**Backend connection errors:**
- Ensure backend server is running
- Check the API URL matches your backend
- Verify CORS settings on the backend
- Check browser console for detailed errors

**Styling issues:**
- Ensure Tailwind CSS is properly configured
- Check for conflicting z-index values
- Verify responsive breakpoints work as expected

## License
Part of the CyberSaarthi project.
