import React, { Component } from 'react';
import MountainStream from '../../resources/images/mountain-stream.jpg';
import CoolPepe from '../../resources/images/cool_pepe.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactUs extends Component {

    render() {

        const backgroundImage = {
            backgroundImage: `url(${MountainStream})`,
            height: 'fit-content',
            width: 'fit-content'
        }
    
        const profileImage = {
            width: '100px',
            height: '100px'
        }

        return (
            <div className="contact-container-container" style={backgroundImage}>
        <div className="contact-container">
            <div className="contact-left">
                <img src={CoolPepe} alt='' style={profileImage}/>
            </div>
            <div className="contact-right">
                <a href="mailto:bryce.cox77@gmail.com"><FontAwesomeIcon className="contact-icons" icon='envelope-open-text' />bryce.cox77@gmail.com</a>
                <p><FontAwesomeIcon className="contact-icons" icon='phone' /> 385-555-5555</p>
                <a href="https://github.com/C-H-I-L-L" className="contact-icons">Github: C-H-I-L-L</a>
            </div>
        </div>
        </div>
        );
    }
}

export default ContactUs;
