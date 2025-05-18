import './ChatIntroduction.scss';
import ChatQuestionExample from '../ChatQuestionExample/ChatQuestionExample';
import robot from '../../images/robot.svg'
import { useTranslation } from 'react-i18next';

const ChatIntroduction = ({ onSend }: { onSend: (message: string) => void }) => {
    const { t } = useTranslation();
    const sendQuestion = (message: string) => {
        onSend(message);
    };
    return (
        <div className="chat-introduction">
            <div className="chat-box">
                <div className="chat-header">
                    <img src={robot} alt='robot' className='robot'></img>
                    <div>
                        <p>{t("hey")}</p>
                        <p>{t("introduction1")}</p>
                        <p>{t("introduction2")}</p>
                        <strong>{t("introduction3")}</strong>

                    </div>
                </div>
                <div className="chat-examples">
                    <ChatQuestionExample text={t("question1")} onSend={sendQuestion} />
                    <ChatQuestionExample text={t("question2")} onSend={sendQuestion} />
                    <ChatQuestionExample text={t("question3")} className="hide-on-mobile" onSend={sendQuestion} />
                    <ChatQuestionExample text={t("question4")} onSend={sendQuestion} />
                </div>
            </div>
        </div>
    );
};

export default ChatIntroduction;
