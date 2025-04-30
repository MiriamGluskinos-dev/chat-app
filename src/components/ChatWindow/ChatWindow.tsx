import { useState } from "react";
import ChatIntroduction from "../ChatIntroduction/ChatIntroduction";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatInput from "../ChatInput/ChatInput";
import './ChatWindow.scss';

const ChatWindow = () => {
  type Message = {
    text: string;
    isUser: boolean;
  };

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  // const handleSend = (newMessage: string) => {
  //   if (!newMessage.trim()) return;
  //   setMessages((prev) => [...prev, newMessage]);
  // };

  const handleSend = (newMessage: string) => {
    if (!newMessage.trim()) return;

    const userMessage = { text: newMessage, isUser: true };
    const botMessage = {
      text: "I'm just a demo response!",
      isUser: false,
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="chatWindow">
      {messages.length === 0 ? (
        <ChatIntroduction onSend={handleSend} />
      ) : (
        <div className="chatMessages">
          {messages.map((msg, index) => (
            <ChatMessage key={index} text={msg.text} isUserState={msg.isUser} />
          ))}
        </div>
      )}
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
