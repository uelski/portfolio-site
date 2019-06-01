import React, { Component } from 'react';
import firebase from '../firebase';

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formControls: {
                email: {
                    value: ''
                },
                name: {
                    value: ''
                },
                message: {
                    value: ''
                }
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.formControls)
        const contactedRef = firebase.database().ref('contacted');
        const newContacted = {
            email: this.state.formControls.email.value,
            name: this.state.formControls.name.value,
            message: this.state.formControls.message.value
        }
        contactedRef.push(newContacted);
        this.setState({
            formControls: {
                email: {
                    value: ''
                },
                name: {
                    value: ''
                },
                message: {
                    value: ''
                }
            }
        })
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                ...this.state.formControls[name],
                value
                }
            }
        });
    }

    render() {
        return(
            <div className="contact-form-container">
                <form className="flex">
                    <div className="input-container">
                        <input className="contact-form-input" placeholder=" " type="text" name="name"  
                        value={this.state.formControls.name.value} 
                        onChange={this.handleChange} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-container">
                        <input className="contact-form-input" placeholder=" " type="email" name="email"
                        value={this.state.formControls.email.value} 
                        onChange={this.handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-container">
                        <input className="contact-form-input" placeholder=" " type="text" name="message"  value={this.state.formControls.message.value}
                        onChange={this.handleChange} />
                        <label htmlFor="message">Message</label>
                    </div>
                </form>
                <button onClick={this.handleSubmit} className="button--text">Submit</button>
            </div>
        )
    }
}

export default ContactForm;