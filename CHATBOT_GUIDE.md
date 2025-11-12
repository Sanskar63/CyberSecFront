# CyberSaarthi ChatBot - Quick Start Guide

## 🚀 Quick Start

### Step 1: Start Your Backend Server
Make sure your Python backend is running:
```bash
cd /path/to/your/backend
python manage.py runserver
# or however you start your backend
```

The backend should be accessible at: `http://127.0.0.1:8000`

### Step 2: Start the Next.js Development Server
```bash
cd /Users/sans/WebDev/cybersaarthi
npm run dev
```

### Step 3: Open Your Browser
Navigate to: `http://localhost:3000`

### Step 4: Use the ChatBot
1. Look for the **blue circular button** with a chat icon at the bottom-right corner
2. Click it to open the chat window
3. Type your question and press Enter or click Send
4. Wait for the AI response
5. Continue chatting as needed

## 📱 What You'll See

### Floating Button (Closed State)
```
┌─────────────────────────────────┐
│                                 │
│                                 │
│         Your Page Content       │
│                                 │
│                                 │
│                           ┌───┐ │
│                           │ 💬│ │  ← Blue floating button
│                           └───┘ │
└─────────────────────────────────┘
```

### Chat Window (Open State)
```
┌─────────────────────────────────┐
│                                 │
│         Your Page Content       │
│                                 │
│                  ┌──────────────┤
│                  │ CyberSaarthi │  ← Chat header
│                  │     AI       │
│                  ├──────────────┤
│                  │              │
│                  │  Bot: Hello! │  ← Messages
│                  │              │
│                  │ User: Help?  │
│                  │              │
│                  │  Bot: Sure!  │
│                  │              │
│                  ├──────────────┤
│                  │ Type here... │  ← Input field
│                  └──────────────┤
│                           │ ✕ │ │  ← Close button
└─────────────────────────────────┘
```

## 🎨 Visual Features

### Colors
- **Primary Blue**: `#2563eb` (Button & Header)
- **User Messages**: Blue background with white text
- **Bot Messages**: White background with gray text
- **Hover Effects**: Slightly darker shades

### Animations
- ✨ Button scales up on hover (110%)
- 🔄 Smooth transitions (300ms)
- 📜 Auto-scroll to latest messages
- ⏳ Loading spinner while waiting for response

### Icons Used
- 💬 `MessageCircle`: Chat button (closed state)
- ✕ `X`: Close chat button
- 📤 `Send`: Send message button
- 🔄 `Loader2`: Loading indicator
- 🛡️ `Shield`: Bot avatar in header

## 🧪 Test Questions

Try these sample questions to test the chatbot:

1. **Basic Questions:**
   - "What is cybersecurity?"
   - "How can I stay safe online?"
   - "What is a VPN?"

2. **Specific Threats:**
   - "What is phishing?"
   - "How do I protect against malware?"
   - "What is ransomware?"

3. **Practical Advice:**
   - "How to create a strong password?"
   - "Is public WiFi safe?"
   - "How to secure my social media?"

## 🔍 Component Structure

```
ChatBot Component
│
├── Floating Button
│   ├── Click Handler (toggleChat)
│   └── Icon (MessageCircle or X)
│
└── Chat Window (conditional render)
    ├── Header
    │   ├── Shield Icon
    │   └── Title & Subtitle
    │
    ├── Messages Container
    │   ├── Welcome Message
    │   ├── User Messages (right-aligned, blue)
    │   ├── Bot Messages (left-aligned, white)
    │   └── Loading Indicator
    │
    └── Input Area
        ├── Text Input
        ├── Send Button
        └── Helper Text
```

## 🎯 Key Features Highlighted

1. **Global Availability**: Works on every page (home, news, information, etc.)
2. **Persistent State**: Chat history maintained while open
3. **Responsive Design**: Works on mobile and desktop
4. **Keyboard Shortcuts**: Enter key to send messages
5. **Visual Feedback**: Loading states, timestamps, sent/received indicators
6. **Error Handling**: User-friendly error messages
7. **Accessibility**: ARIA labels for screen readers

## 🛠️ Configuration Options

### Backend URL (Current)
```typescript
const API_URL = "http://127.0.0.1:8000/api/rag-chat/";
```

### Chat Window Dimensions
```typescript
width: 96 (384px)
height: 600px
max-height: calc(100vh - 8rem)
```

### Position
```typescript
bottom: 24px (6 rem)
right: 24px (6 rem)
z-index: 50
```

## 📋 Checklist

Before testing, ensure:
- [ ] Backend server is running on port 8000
- [ ] Next.js dev server is running
- [ ] No console errors in browser
- [ ] Chatbot button visible at bottom-right
- [ ] Chat window opens when button clicked
- [ ] Messages send and receive properly
- [ ] Error handling works (try with backend off)

## 🐛 Common Issues & Solutions

### Issue: "Can't connect to server"
**Solution:** Start your backend server

### Issue: Button not visible
**Solution:** Check z-index conflicts, inspect element positioning

### Issue: Messages not sending
**Solution:** Check browser console, verify API endpoint, check CORS

### Issue: Styling broken
**Solution:** Verify Tailwind CSS is working, rebuild if needed

## 🎓 For Developers

### Adding New Features

**Add Chat History Persistence:**
```typescript
// Save to localStorage
useEffect(() => {
  localStorage.setItem('chatHistory', JSON.stringify(messages));
}, [messages]);

// Load from localStorage
useEffect(() => {
  const saved = localStorage.getItem('chatHistory');
  if (saved) setMessages(JSON.parse(saved));
}, []);
```

**Add Typing Indicator:**
```typescript
const [isTyping, setIsTyping] = useState(false);
// Set isTyping to true before API call
// Set to false after response
```

**Customize Welcome Message:**
```typescript
const [messages, setMessages] = useState<Message[]>([
  {
    id: "welcome",
    text: "Your custom welcome message here!",
    sender: "bot",
    timestamp: new Date(),
  },
]);
```

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify backend is running and accessible
3. Check network tab for API calls
4. Review the CHATBOT_README.md for detailed documentation

Happy chatting! 🎉
