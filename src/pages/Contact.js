import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

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
                    <input type="text" className="form-control" id="name" name='name' value={formData.name} onChange={handleChange} placeholder="Jane Doe"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" name='email' value={formData.email} onChange={handleChange} placeholder="example@email.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name='message' value={formData.message} onChange={handleChange} rows="5"></textarea>
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