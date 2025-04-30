import './ChatQuestionExample.scss';
interface ChatQuestionExampleProps {
    text: string;
    onSend: (message: string) => void;
}

const ChatQuestionExample = ({ text, onSend }: ChatQuestionExampleProps) => {
    const sendQuestion = () => {
        onSend(text);
    };

    return (
        <button className="chat-question" onClick={sendQuestion}>
            {text}
        </button>
    );
};

export default ChatQuestionExample;
