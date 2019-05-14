import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';

class Contact extends Component {
    render() {
        return(
            <div ref={this.props.refPass} className="page-section section--contact">
                <SectionHeader header="Contact" subheader="Give me a shout" />
                <ContactForm />
            </div>
        )
    }
}

export default Contact;