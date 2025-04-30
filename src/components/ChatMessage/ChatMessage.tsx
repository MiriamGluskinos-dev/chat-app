// import { useState } from 'react';
import './ChatMessage.scss';
import robot from '../../images/robot.svg'
import user from '../../images/user.svg'

const ChatMessage = ({ text, isUserState }: { text: string; isUserState: boolean }) => {

    return (
        <div className={isUserState ? "message user-message" : "message bot-message"}>
            {isUserState ? (
                <img src={robot} alt='robot' className='robot'></img>)
                : (<img src={user} alt='user' className='user'></img>)
            }
            {text}
        </div>
    );
};

export default ChatMessage;
