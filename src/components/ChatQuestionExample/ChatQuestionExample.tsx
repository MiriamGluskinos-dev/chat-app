import './ChatQuestionExample.scss';
interface ChatQuestionExampleProps {
    text: string;
    onSend: (message: string) => void;
    className?: string;
}

const ChatQuestionExample = ({ text, onSend, className }: ChatQuestionExampleProps) => {
    const sendQuestion = () => {
        onSend(text);
    };

    return (
        <button className={`chat-question ${className || ""}`} onClick={sendQuestion}>
            {text}
        </button>
    );
};

export default ChatQuestionExample;
