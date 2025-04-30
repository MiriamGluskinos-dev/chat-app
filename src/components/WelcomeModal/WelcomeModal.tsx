import './WelcomeModal.scss';
import welcomeImage from '../../images/welcomeChat.png';
import { Button, Icon } from '@igds/react'
import { useTranslation } from "react-i18next";
import { useState } from 'react';

const WelcomeModal = () => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleClose = () => { setIsModalOpen(false); };
    return (
        <> {isModalOpen && (
            <div className="overlay">
                <div className="modal">
                    <Icon name="close" className="closeButton" onClick={handleClose} />
                    <div className="imageContainer">
                        <img
                            src={welcomeImage}
                            alt="Chat Icon"
                            className="image"
                        />
                    </div>
                    <h2 className="title">{t("welcomeTitle")}</h2>
                    <h3 className="subtitle">{t("howToUse")}</h3>
                    <line className='line'></line>
                    <div className='instruction'>
                        <Icon name='edit' className='editIcon'></Icon>
                        <p className="text">{t("instruction1")}</p>
                    </div>
                    <div className='instruction'>
                        <Icon name='message-square' className='messageIcon'></Icon>
                        <p className="text">{t("instruction2")}</p>
                    </div>


                    <Button className="startButton" onClick={handleClose}>{t("letsStart")}</Button>
                </div>
            </div>
        )}
        </>
    );
};

export default WelcomeModal;