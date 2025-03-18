
import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Minimize2, Maximize2 } from "lucide-react";
import { Message } from "@/types";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hi there! I'm Rajnish's AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: newMessage,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponses = {
        default: [
          "I'd be happy to help with that! What would you like to know about Rajnish Raj's work?",
          "That's an interesting question. Let me think about how Rajnish would answer...",
          "Thanks for your interest in Rajnish's portfolio! Is there anything specific you'd like to know?",
          "Great question! Rajnish has worked on numerous projects in React, NestJS, and UI/UX design.",
          "Feel free to check out the projects section for examples of Rajnish's work."
        ],
        skills: [
          "Rajnish specializes in React, NestJS, NextJS, TypeScript, and UI/UX design. He's particularly skilled in creating responsive web applications.",
          "As a full-stack developer, Rajnish works with modern JavaScript frameworks, RESTful APIs, and database systems.",
          "Rajnish has extensive experience with both frontend and backend technologies, making him a versatile full-stack developer."
        ],
        contact: [
          "You can contact Rajnish through the contact form on this website, or connect with him on LinkedIn.",
          "Rajnish is currently available for freelance projects and consulting. Feel free to reach out through the contact section.",
          "If you'd like to discuss a project with Rajnish, the best way is to use the contact form or send an email directly."
        ],
        experience: [
          "Rajnish has worked with numerous clients across various industries, helping them build modern web applications.",
          "With several years of experience in software engineering, Rajnish has developed expertise in creating scalable web solutions.",
          "Rajnish's experience spans from startups to larger organizations, where he's contributed to critical projects."
        ]
      };
      
      // Simple keyword matching for context-aware responses
      let responseArray = aiResponses.default;
      const messageLower = newMessage.toLowerCase();
      
      if (messageLower.includes("skill") || messageLower.includes("technology") || messageLower.includes("tech stack")) {
        responseArray = aiResponses.skills;
      } else if (messageLower.includes("contact") || messageLower.includes("hire") || messageLower.includes("email")) {
        responseArray = aiResponses.contact;
      } else if (messageLower.includes("experience") || messageLower.includes("work") || messageLower.includes("background")) {
        responseArray = aiResponses.experience;
      }
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: responseArray[Math.floor(Math.random() * responseArray.length)],
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all z-50 animate-bounce-slow"
        aria-label="Open chat assistant"
      >
        <MessageSquare size={24} />
        <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full"></span>
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 bg-background border border-border shadow-lg rounded-xl overflow-hidden z-50 transition-all duration-300 flex flex-col ${
        isMinimized ? "w-80 h-14" : "w-96 h-[500px]"
      }`}
    >
      {/* Chat header */}
      <div className="bg-primary text-primary-foreground p-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center mr-2">
            <MessageSquare size={16} />
          </div>
          <h3 className="font-medium">Rajnish's Assistant</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
          >
            {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages area */}
          <div className="flex-1 p-4 overflow-y-auto scrollbar-thin">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 shadow-sm ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block text-right">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t border-border p-3 bg-background/80 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything about Rajnish..."
                className="flex-1 bg-secondary/50 text-foreground rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="bg-primary text-primary-foreground rounded-md p-2.5 disabled:opacity-50 hover:bg-primary/90 transition-colors"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatAssistant;
