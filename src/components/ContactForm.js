import React, { Component } from 'react';

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
                    <input className="contact-form-input" type="text" name="name" required autocomplete="off" 
                     value={this.state.formControls.name.value} 
                     onChange={this.handleChange} />
                     <label htmlFor="name"><span>Name</span></label>
                    <input className="contact-form-input" type="email" name="email" required autocomplete="off" 
                     value={this.state.formControls.email.value} 
                     onChange={this.handleChange}/>
                     <label htmlFor="email"><span>Email</span></label>
                    <input className="contact-form-input" type="text" name="message" required autocomplete="off" value={this.state.formControls.message.value}
                     onChange={this.handleChange} />
                     <label htmlFor="message"><span>Message</span></label>
                </form>
                <button onClick={this.handleSubmit} className="text-button">Submit</button>
            </div>
        )
    }
}

export default ContactForm;