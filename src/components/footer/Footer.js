import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import footerStyles from './Footer.module.css';

const Footer = ({title}) => {
    return (
        <div className={footerStyles.container}>
            <FontAwesomeIcon className={footerStyles.icon} icon={faEnvelope}/>
            <p className={footerStyles.title}>{title}</p>
        </div>
    )
}

export default Footer;