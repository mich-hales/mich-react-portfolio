import React, { useState } from 'react';

function Contact() {
    // setting form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // error messages for each field
    const [errorMessage, setErrorMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    // handles the submit button and will display error messages accordingly
    const handleSubmit = (event) => {
        event.preventDefault();
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!formData.message) {
            setErrorMessage('Please enter a message.');
        } else if (!emailRegex.test(formData.email)){
            setErrorMessage('Please enter a valid email address.');
        } else {
            setFormData({ name: '', email: '', message: ''});
            setErrorMessage('');
        }
    };

    return (
        <div className='contentContainer container'>
            <h1 className='contactHeader'>Contact</h1>
            <form onSubmit={handleSubmit}>
            <div className='contactInput'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' value={formData.name} onChange={handleChange} placeholder="Enter your name" onBlur={(event) => {
                        if (!event.target.value) {
                            setNameError('This field is required.');
                        } else {
                            setNameError('');
                        }
                    }}/>
                    {nameError && <div className='alert alert-danger field-required'>{nameError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" name='email' value={formData.email} onChange={handleChange} placeholder="Enter your email address" onBlur={(event) => {
                        if (!event.target.value) {
                            setEmailError('This field is required.');
                        } else {
                            setEmailError('');
                        }
                    }}/>
                    {emailError && <div className='alert alert-danger field-required'>{emailError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name='message' rows="5" value={formData.message} onChange={handleChange} placeholder='Enter your message' onBlur={(event) => {
                        if (!event.target.value) {
                            setMessageError('This field is required.');
                        } else {
                            setMessageError('');
                        }
                    }}/>
                    {messageError && <div className='alert alert-danger field-required'>{messageError}</div>}
                </div>
                {errorMessage && (
                    <div className='alert alert-danger'>
                        <p className='errorMessage'>{errorMessage}</p>
                        {console.log(errorMessage)}
                    </div>
                )}
                <button className='btn' type='submit'>Submit</button>
            </div>
            </form>
        </div>
    )
}

export default Contact;