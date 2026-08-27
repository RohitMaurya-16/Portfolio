import React, { useState, useEffect, useRef } from 'react';
import {
  FaRobot,
  FaUser,
  FaPaperPlane,
  FaTrash,
} from 'react-icons/fa';

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text:
        "Hi! 👋 I'm Rohit's portfolio assistant. Ask me about his skills, education, internship, projects, certifications, hackathons, or achievements.",
    },
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages, isTyping]);

  // Resume-based AI responses
  const getAIResponse = (text) => {
    const msg = text.toLowerCase().trim();

    // Greeting
    if (
      msg.includes('hello') ||
      msg.includes('hi') ||
      msg.includes('hey')
    ) {
      return "Hello! 👋 I'm Rohit's portfolio assistant. You can ask me about his education, skills, projects, internship, certifications, hackathons, or achievements.";
    }

    // Name
    if (
      msg.includes('who is rohit') ||
      msg.includes('who are you') ||
      msg.includes('about rohit') ||
      msg === 'name'
    ) {
      return 'Rohit Maurya is a B.Tech Computer Science (AI-ML) student at IILM University, Greater Noida, with a 9.01/10 CGPA. He focuses on full-stack development, AI/ML, and software engineering.';
    }

    // Education
    if (
      msg.includes('education') ||
      msg.includes('college') ||
      msg.includes('university') ||
      msg.includes('degree') ||
      msg.includes('cgpa') ||
      msg.includes('study')
    ) {
      return 'Rohit is pursuing a B.Tech in Computer Science (AI-ML) at IILM University, Greater Noida, from August 2023 to May 2027, with a CGPA of 9.01/10.';
    }

    // Programming languages
    if (
      msg.includes('programming language') ||
      msg.includes('coding language') ||
      msg.includes('languages')
    ) {
      return 'Rohit works with Java, JavaScript, Python, C, and SQL.';
    }

    // Skills
    if (
      msg.includes('skill') ||
      msg.includes('technical') ||
      msg.includes('technology') ||
      msg.includes('tech stack')
    ) {
      return 'Rohit’s technical skills include Java, JavaScript, Python, C, SQL, React.js, Node.js, Express.js, Flask, REST APIs, API integration, Supabase, PostgreSQL, MongoDB, Git, GitHub, VS Code, Google Colab, Data Structures & Algorithms, OOP, DBMS, Operating Systems, and Machine Learning.';
    }

    // Frontend
    if (
      msg.includes('frontend') ||
      msg.includes('front end') ||
      msg.includes('react')
    ) {
      return 'Rohit has frontend development experience with React.js, HTML, and CSS. He has used React.js in projects such as FormSathi and StreamSense.';
    }

    // Backend
    if (
      msg.includes('backend') ||
      msg.includes('back end') ||
      msg.includes('server')
    ) {
      return 'Rohit works with Node.js, Express.js, Flask, REST APIs, and API integration for backend development.';
    }

    // Database
    if (
      msg.includes('database') ||
      msg.includes('dbms') ||
      msg.includes('sql')
    ) {
      return 'Rohit has experience with SQL, Supabase, PostgreSQL, and MongoDB, along with a strong foundation in DBMS.';
    }

    // AI / ML
    if (
      msg.includes('machine learning') ||
      msg.includes('ai') ||
      msg.includes('artificial intelligence') ||
      msg.includes('ml')
    ) {
      return 'Rohit is pursuing Computer Science with an AI-ML specialization. He has experience with Machine Learning, Scikit-learn, data preprocessing, feature engineering, model evaluation, and feature selection.';
    }

    // Internship
    if (
      msg.includes('intern') ||
      msg.includes('internship') ||
      msg.includes('eduskills')
    ) {
      return 'Rohit worked as an AI-ML Virtual Intern at Eduskills from January 2026 to March 2026. He built and evaluated Machine Learning models using Scikit-learn and applied data preprocessing, feature engineering, model evaluation, and feature selection techniques.';
    }

    // FormSathi
    if (
      msg.includes('formsathi') ||
      msg.includes('form sathi')
    ) {
      return 'FormSathi is a full-stack application management system built using Node.js, Express.js, JavaScript, React.js, and Supabase. It includes authentication, profiles, dashboards, documents, applications, eligibility, and opportunities.';
    }

    // Digital Mental Health
    if (
      msg.includes('mental health') ||
      msg.includes('digital mental')
    ) {
      return 'Digital Mental Health Platform is a full-stack web application built with Python Flask, JavaScript, HTML, CSS, and Chart.js. It includes authentication, profiles, AI chat, appointments, mood tracking, posts, likes, and comments.';
    }

    // StreamSense
    if (
      msg.includes('streamsense') ||
      msg.includes('movie recommendation') ||
      msg.includes('recommendation')
    ) {
      return 'StreamSense is a recommendation engine that uses Cosine Similarity across 5,000+ data points for content recommendations. It was built using React.js and Node.js and integrates the Watchmode API.';
    }

    // NoteHive
    if (
      msg.includes('notehive') ||
      msg.includes('note hive') ||
      msg.includes('notes project')
    ) {
      return 'NoteHive is a note management project available on Rohit’s GitHub. It focuses on creating, organizing, and managing notes through a web application.';
    }

    // ProjectCloud
    if (
      msg.includes('projectcloud') ||
      msg.includes('project cloud')
    ) {
      return 'ProjectCloud is an open-source platform designed to connect students and educational institutes for project sharing and event discovery. It uses Next.js, Supabase, and Tailwind CSS.';
    }

    // E-commerce
    if (
      msg.includes('ecommerce') ||
      msg.includes('e-commerce') ||
      msg.includes('shopping')
    ) {
      return 'Rohit built an e-commerce website using Django, Python, HTML, CSS, JavaScript, and SQLite. It includes product browsing, shopping cart functionality, authentication, profile management, search, filters, and product reviews.';
    }

    // Airline
    if (
      msg.includes('airline') ||
      msg.includes('airline management')
    ) {
      return 'The Airline Management System was built using Java and SQL. It focuses on booking, scheduling, passenger management, and real-time processing.';
    }

    // Projects
    if (
      msg.includes('project') ||
      msg.includes('projects')
    ) {
      return 'Rohit has worked on several projects including FormSathi, Digital Mental Health Platform, StreamSense, NoteHive, ProjectCloud, an E-Commerce Website, and an Airline Management System.';
    }

    // Certifications
    if (
      msg.includes('certificate') ||
      msg.includes('certification') ||
      msg.includes('certifications')
    ) {
      return 'Rohit has certifications in Machine Learning from Columbia+, Intro to Deep Learning from Infosys Springboard, Database Design from Infosys Springboard, and Programming in C from Infosys Springboard.';
    }

    // Hackathons
    if (
      msg.includes('hackathon') ||
      msg.includes('hackathon') ||
      msg.includes('competition')
    ) {
      return 'Rohit has participated in Hack 24 at IIIT Delhi, Drone4S Hackathon at IIT Roorkee, Cybersecurity Hackathon at IIT Kanpur, GreenGuard Hackathon at IIT Roorkee, and Adobe India Hackathon 2025.';
    }

    // Hack 24
    if (
      msg.includes('hack 24') ||
      msg.includes('iiit delhi')
    ) {
      return 'Rohit participated in Hack 24 at IIIT Delhi on August 24, 2024, and secured 6th rank.';
    }

    // GreenGuard
    if (
      msg.includes('greenguard') ||
      msg.includes('green guard')
    ) {
      return 'Rohit was a finalist in the GreenGuard Hackathon, placing among the top 5% of participants.';
    }

    // Cybersecurity
    if (
      msg.includes('cybersecurity') ||
      msg.includes('cyber security') ||
      msg.includes('iit kanpur') ||
      msg.includes('hack iitk')
    ) {
      return 'Rohit participated in the Cybersecurity Hackathon at IIT Kanpur from February 15–18, 2025, in the Cybersecurity Solution Track.';
    }

    // Drone4S
    if (
      msg.includes('drone4s') ||
      msg.includes('drone')
    ) {
      return 'Rohit participated in the Drone4S Hackathon at IIT Roorkee on October 12, 2024.';
    }

    // Achievements
    if (
      msg.includes('achievement') ||
      msg.includes('award') ||
      msg.includes('winner') ||
      msg.includes('rank')
    ) {
      return 'Rohit’s achievements include winning a College Coding Quiz with 100+ participants, becoming a finalist in the IIT Roorkee GreenGuard Hackathon in the top 5%, and securing 6th rank at the IIIT Delhi Hackathon.';
    }

    // GitHub
    if (
      msg.includes('github') ||
      msg.includes('source code') ||
      msg.includes('repository')
    ) {
      return 'Rohit maintains his projects on GitHub, including FormSathi, NoteHive, Digital Mental Health, StreamSense, ProjectCloud, E-Commerce Website, and Airline Management System.';
    }

    // Career
    if (
      msg.includes('career') ||
      msg.includes('job') ||
      msg.includes('hire') ||
      msg.includes('developer')
    ) {
      return 'Rohit is building his career in software development, full-stack development, and AI/ML. His experience includes academic projects, an AI-ML virtual internship, hackathons, and hands-on development with modern technologies.';
    }

    // Contact
    if (
      msg.includes('contact') ||
      msg.includes('email') ||
      msg.includes('linkedin')
    ) {
      return 'You can find Rohit’s contact information and professional profiles in the portfolio header, including his email, LinkedIn, and GitHub.';
    }

    // Help
    if (
      msg.includes('help') ||
      msg.includes('what can i ask') ||
      msg.includes('what can you do')
    ) {
      return 'You can ask me things like: "What are Rohit’s skills?", "Tell me about his internship", "What projects has he built?", "What certifications does he have?", "What hackathons did he participate in?", or "What is his CGPA?"';
    }

    // Default
    return "I can answer questions about Rohit's resume, skills, education, internship, projects, certifications, hackathons, and achievements. Try asking something like: “Tell me about his projects.”";
  };

  const handleSend = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput || isTyping) return;

    const userMessage = {
      sender: 'user',
      text: trimmedInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(trimmedInput);

      const aiMessage = {
        sender: 'ai',
        text: response,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 700);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        sender: 'ai',
        text:
          "Hi! 👋 I'm Rohit's portfolio assistant. Ask me anything about his resume, skills, projects, internship, certifications, or hackathons.",
      },
    ]);
  };

  return (
    <section
      id="ai-chatbot"
      className="animate-fadeIn max-w-2xl mx-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b-2 border-blue-600 pb-1">
        <h2 className="text-2xl font-semibold">
          AI Portfolio Assistant
        </h2>

        <button
          onClick={clearChat}
          title="Clear chat"
          className="text-gray-500 hover:text-red-500 transition"
        >
          <FaTrash />
        </button>
      </div>

      {/* Chat Box */}
      <div className="border rounded-xl shadow-lg bg-gray-50 dark:bg-gray-800 flex flex-col h-[500px] overflow-hidden">

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2 ${
                msg.sender === 'user'
                  ? 'justify-end'
                  : 'justify-start'
              }`}
            >
              {/* AI Icon */}
              {msg.sender === 'ai' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <FaRobot className="text-sm" />
                </div>
              )}

              {/* Message */}
              <div
                className={`p-3 rounded-xl max-w-[80%] text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>

              {/* User Icon */}
              {msg.sender === 'user' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center">
                  <FaUser className="text-sm" />
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <FaRobot className="text-sm" />
              </div>

              <div className="bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-xl rounded-bl-none">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:150ms]"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:300ms]"></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t dark:border-gray-700 p-3 bg-white dark:bg-gray-900">
          <div className="flex gap-2">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about Rohit's skills, projects, internship..."
              className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 
                         text-gray-900 dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg 
                         hover:bg-blue-700 transition 
                         disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center justify-center"
              aria-label="Send message"
            >
              <FaPaperPlane />
            </button>

          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            Press Enter to send
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIChatbot;
