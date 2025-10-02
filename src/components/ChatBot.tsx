import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Minimize2,
  Maximize2,
  RefreshCw
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { 
  createChatConversation, 
  getChatConversations, 
  getChatMessages, 
  sendChatMessage 
} from '../lib/supabase';
import { ChatConversation, ChatMessage } from '../types';

interface ChatBotProps {
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentConversation, setCurrentConversation] = useState<ChatConversation | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    initializeChat();
  }, [user]);

  const initializeChat = async () => {
    if (!user) {
      // Guest mode welcome
      const guestMessage: ChatMessage = {
        id: 'guest-welcome',
        conversation_id: 'guest',
        sender_type: 'bot',
        message: `Hello! 👋 I'm your IdeaForge Global assistant. 

You're in guest mode. I can answer general questions, but for full personalized support, please log in.

How can I help you today?`,
        metadata: {},
        created_at: new Date().toISOString()
      };
      setMessages([guestMessage]);
      setCurrentConversation(null);
      return;
    }

    try {
      const { data: conversations } = await getChatConversations();
      let conversation = conversations?.[0];

      if (!conversation) {
        const { data: newConversation } = await createChatConversation('Help Desk Chat');
        conversation = newConversation || null;
      }

      if (conversation) {
        setCurrentConversation(conversation);
        const { data: existingMessages } = await getChatMessages(conversation.id);

        if (existingMessages && existingMessages.length > 0) {
          setMessages(existingMessages);
        } else {
          const welcomeMessage: ChatMessage = {
            id: 'welcome',
            conversation_id: conversation.id,
            sender_type: 'bot',
            message: `Hello! 👋 I'm your IdeaForge Global assistant. I can help with:

• Competition guidelines  
• Technical issues  
• Account & profile support  
• Courses and resources  

What would you like to know today?`,
            metadata: {},
            created_at: new Date().toISOString()
          };
          setMessages([welcomeMessage]);
        }
      }
    } catch (error) {
      console.error('Error initializing chat:', error);
      showBotError("⚠️ Unable to load chat history. You can still ask me questions!");
    }
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('competition') || message.includes('contest') || message.includes('challenge')) {
      return `Great question about our Global Youth Entrepreneurship Challenge! 🏆

• Open to ages 13–25 worldwide  
• Categories: Tech, Social Impact, Environment, Healthcare  
• Prizes: certificates, awards, mentorship  
• Submit before the deadline via the Competition section  

Want help refining your project idea?`;
    }

    if (message.includes('technical') || message.includes('bug') || message.includes('error')) {
      return `Technical help 🔧:  
• Refresh page, clear cache  
• Use Chrome/Firefox/Edge  
• Check internet  

Login issue? Reset password.  
Upload issue? Verify file type & size.`;
    }

    if (message.includes('account') || message.includes('profile') || message.includes('login') || message.includes('password')) {
      return `Account Help 👤:  
• Forgot password → reset link  
• Email not verified → check spam  
• Profile edit → Dashboard  
• Use Google Sign-In for easier access.`;
    }

    if (message.includes('course') || message.includes('learning') || message.includes('certificate')) {
      return `Learning 📚:  
• Entrepreneurship, leadership, tech trends  
• Certificates for completed courses  
• Badges for competitions  
Which course do you want recommendations for?`;
    }

    if (message.includes('platform') || message.includes('ideaforge') || message.includes('about')) {
      return `IdeaForge 🌍 connects student innovators:  
• Competitions  
• Courses & mentorship  
• Networking & certificates`;
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return `Hello 👋! I'm here to assist with competitions, technical support, and learning.`;
    }

    if (message.includes('thank')) {
      return `You're welcome! 😊 Always here to help.`;
    }

    return `Thanks for your message! 🤖 Could you be more specific? Example:  
• "How do I submit an entry?"  
• "Login not working"  
• "Available courses?"`;
  };

  const showBotError = (msg: string) => {
    const botError: ChatMessage = {
      id: `error-${Date.now()}`,
      conversation_id: currentConversation?.id || 'guest',
      sender_type: 'bot',
      message: msg,
      metadata: {},
      created_at: new Date().toISOString()
    };
    setMessages(prev => [...prev, botError]);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || loading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setLoading(true);

    // Add user message
    const userChatMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      conversation_id: currentConversation?.id || 'guest',
      sender_type: 'user',
      message: userMessage,
      metadata: {},
      created_at: new Date().toISOString()
    };
    setMessages(prev => [...prev, userChatMessage]);

    // Save to DB if logged in
    if (currentConversation && user) {
      try {
        await sendChatMessage(currentConversation.id, userMessage, 'user');
      } catch (err) {
        console.error("Error saving user message:", err);
        showBotError("⚠️ Could not save your message, but I'll still reply.");
      }
    }

    // Generate bot reply
    const botResponse = generateBotResponse(userMessage);

    const botChatMessage: ChatMessage = {
      id: `bot-${Date.now()}`,
      conversation_id: currentConversation?.id || 'guest',
      sender_type: 'bot',
      message: botResponse,
      metadata: {},
      created_at: new Date().toISOString()
    };

    // Simulate typing delay proportional to text length
    const delay = Math.min(3000, botResponse.length * 30);

    setTimeout(async () => {
      setMessages(prev => [...prev, botChatMessage]);
      if (currentConversation && user) {
        try {
          await sendChatMessage(currentConversation.id, botResponse, 'bot');
        } catch (err) {
          console.error("Error saving bot message:", err);
        }
      }
      setLoading(false);
    }, delay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startNewConversation = async () => {
    if (!user) {
      initializeChat(); // reset guest mode
      return;
    }
    try {
      const { data: newConversation } = await createChatConversation('New Help Chat');
      if (newConversation) {
        setCurrentConversation(newConversation);
        setMessages([{
          id: 'welcome-new',
          conversation_id: newConversation.id,
          sender_type: 'bot',
          message: `Hello again! 👋 New conversation started. What would you like help with?`,
          metadata: {},
          created_at: new Date().toISOString()
        }]);
      }
    } catch (error) {
      console.error('Error creating new conversation:', error);
      showBotError("⚠️ Could not start a new conversation.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center z-50 p-2 sm:p-4">
      <div className={`bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-2xl transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-[90vh] sm:h-[600px]'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 sm:w-6 sm:h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold">IdeaForge Assistant</h3>
              <p className="text-xs sm:text-sm opacity-90">Always here to help</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={startNewConversation}
              className="p-1.5 sm:p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              title="New Conversation"
            >
              <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </button>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1.5 sm:p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 h-[calc(90vh-140px)] sm:h-96">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender_type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[85%] sm:max-w-xs lg:max-w-md ${
                    message.sender_type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender_type === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {message.sender_type === 'user' ? (
                        <User className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                      ) : (
                        <Bot className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                      )}
                    </div>
                    <div className={`px-3 py-2 sm:px-4 sm:py-2 rounded-2xl ${
                      message.sender_type === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-xs sm:text-sm whitespace-pre-wrap">{message.message}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                    </div>
                    <div className="bg-gray-100 px-3 py-2 sm:px-4 sm:py-2 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  aria-label="Chat message input"
                  className="flex-1 px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  disabled={loading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || loading}
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBot;