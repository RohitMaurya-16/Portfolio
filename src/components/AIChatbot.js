import React, { useState, useEffect, useRef } from 'react';

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! Ask me anything about my resume or experience.' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulated AI response based on resume data (hardcoded for demo)
  const getAIResponse = (text) => {
    const msg = text.toLowerCase();
    if (msg.includes('core skills')) {
      return 'My core skills include JavaScript, React.js, Node.js, Python, and Machine Learning.';
    } else if (msg.includes('intern')) {
      return 'I interned at Tech Solutions Inc. as a Software Engineer Intern.';
    } else if (msg.includes('project xyz')) {
      return 'Project XYZ was a web application built with React and Node.js to manage tasks efficiently.';
    } else if (msg.includes('education')) {
      return 'I graduated from University of Example with a BSc in Computer Science.';
    } else {
      return "I'm here to help! Please ask me about my resume or experience.";
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setTimeout(() => {
      const aiMessage = { sender: 'ai', text: getAIResponse(input.trim()) };
      setMessages((prev) => [...prev, aiMessage]);
    }, 700);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <section id="ai-chatbot" className="animate-fadeIn max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 pb-1">AI Chatbot</h2>
      <div className="border rounded shadow p-4 bg-gray-50 dark:bg-gray-800 flex flex-col h-96">
        <div className="flex-1 overflow-y-auto mb-4 space-y-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded max-w-xs ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white self-end'
                  : 'bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 self-start'
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about my resume or experience..."
            className="flex-1 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIChatbot;
