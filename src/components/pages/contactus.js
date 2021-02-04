import React from 'react'
import MountainStream from '../../resources/images/mountain-stream.jpg';
import SadPepe from '../../resources/images/sadpepe.png';

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
            <div className="contact-left-side">
                <img src={SadPepe} alt='' style={profileImage}/>
            </div>
            <div className="contact-right-side">
                <div>email address: Bryce.Cox77@gmail.com</div>
            </div>
        </div>
        </div>
    )
}
