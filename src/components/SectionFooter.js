import React, { Component } from 'react';
import FooterIcon from './FooterIcon';
import facebookIcon from '../images/facebook-icon.png';
import githubIcon from '../images/github-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import emailIcon from '../images/email-icon.png';
import downloadIcon from '../images/download-icon.png';
import resume from '../Sam_Vredenburgh_Resume.pdf'

class Footer extends Component {
    render() {
        const footerIcons = [
            {
                link: 'https://github.com/uelski',
                src: githubIcon,
                alt: 'GitHub Icon'
            },
            {
                link: 'https://www.linkedin.com/in/sam-vredenburgh-b5936641/',
                src: linkedinIcon,
                alt: 'LinkedIn Icon'
            },
            {
                link: 'https://www.facebook.com/sam.vredenburgh',
                src: facebookIcon,
                alt: 'Facebook Icon'
            },
            {
                link: 'mailto: sam.vburgh@gmail.com',
                src: emailIcon,
                alt: 'Email Icon'
            },
            {
                link: resume,
                src: downloadIcon,
                alt: 'Resume Icon'
            },
        ]
        const icons = footerIcons.map((icon) => {
            return (
                <FooterIcon key={icon.alt} link={icon.link} src={icon.src} alt={icon.alt}/>
            )
        })
        return(
            <div ref="footer-target" className="page-section section--footer">
                <div className="icon-container flex">
                    {icons}
                </div>

            </div>
        )
    }
}

export default Footer;