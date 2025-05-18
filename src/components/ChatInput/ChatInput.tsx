import './ChatInput.scss';
import { Input } from '@igds/react';
import { useTranslation } from 'react-i18next';

interface ChatInputProps {
  input: string;
  onSend: (message: string) => void;
}

const ChatInput = ({ input, onSend }: ChatInputProps) => {
  const {t} = useTranslation();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const inputElement = e.target as HTMLInputElement;
  
    if (e.key === 'Enter' && inputElement.value.trim()) {
      onSend(inputElement.value.trim());
    }
  };   

  return (
    <div className="chat-input">
      <Input
        icon="arrow-left"
        name="input"
        placeholder={t("writeTheQuestionHere")}
        className='input'
        onKeyDown={handleKeyDown}
        value={input}
        onClick={(e) => onSend((e.target as HTMLInputElement).value)}
      />
    </div>
  );
};

export default ChatInput;
