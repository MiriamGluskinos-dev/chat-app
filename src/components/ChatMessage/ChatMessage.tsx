import './ChatMessage.scss';
import robot from '../../images/robot.svg'
import user from '../../images/user.svg'
import thumbsUp from '../../images/hand-thumbs-up.svg'
import thumbsDown from '../../images/hand-thumbs-down.svg'
import files from '../../images/files.svg'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


const ChatMessage = ({ text, isUserState }: { text: string; isUserState: boolean }) => {
    const { t } = useTranslation();
    const [showCopied, setShowCopied] = useState(false);

    const handleCopy = (textToCopy: string) => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setShowCopied(true);
            setTimeout(() => setShowCopied(false), 1500);
        });
    };
    return (
        <div className={isUserState ? "message user-message" : "message bot-message"}>
            {isUserState ? (
                <img src={robot} alt='robot' className='robot'></img>)
                : (<img src={user} alt='user' className='user'></img>)
            }
            {text}
            {!isUserState && (
                <div className="bot-icons">
                    <img src={thumbsUp} alt="thumbs up" />
                    <img src={thumbsDown} alt="thumbs down" />
                    <img src={files} onClick={() => handleCopy(text)} alt="copy all" />
                </div>
            )}

            {showCopied && <div className="copied-popup">{t("copied")}</div>}
        </div>
    );
};

export default ChatMessage;
