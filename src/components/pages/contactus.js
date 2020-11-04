import React from 'react'
import MountainStream from '../../resources/images/mountain-stream.jpg';

export default function ContactUs() {
    const backgroundImage = {
        backgroundImage: `url(${MountainStream})`,
        height: 'fit-content',
        width: 'fit-content'
    }
    return (
        <div className="contact-container-container" style={backgroundImage}>
        <div className="contact-container">
            <div className="contact-left-side">
                insert contact picture here
            </div>
            <div className="contact-right-side">
                <div>email address: triangleman369@gmail.com</div>
                <div>github: </div>
            </div>
        </div>
        </div>
    )
}
