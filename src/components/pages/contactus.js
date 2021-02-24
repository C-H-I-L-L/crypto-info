import React from 'react'
import MountainStream from '../../resources/images/mountain-stream.jpg';
import CoolPepe from '../../resources/images/cool_pepe.jpg';

export default function ContactUs() {
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
            <div className="contact-top">
                <img src={CoolPepe} alt='' style={profileImage}/>
            </div>
            <div className="contact-bottom">
                <a href="mailto:bryce.cox77@gmail.com">Email Pepe</a>
            </div>
        </div>
        </div>
    )
}
