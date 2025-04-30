import { useState } from 'react';
import './ChatInput.scss';
import { Input } from '@igds/react';
import { useTranslation } from 'react-i18next';

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput = ({ onSend }: ChatInputProps) => {
  const [text, setText] = useState('');
  const {t} = useTranslation();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const inputElement = e.target as HTMLInputElement;
  
    if (e.key === 'Enter' && inputElement.value.trim()) {
      onSend(inputElement.value.trim());
      setText('question');
    }
  };   

  return (
    <div className="chat-input">
      {/* <input
        type="text"
        placeholder="אפשר לכתוב כאן את השאלה"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        dir="rtl"
      /> */}
      {/* <span className="arrow">←</span> */}
      <Input
        icon="arrow-left"
        name="input"
        placeholder={t("writeTheQuestionHere")}
        className='input'
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ChatInput;
