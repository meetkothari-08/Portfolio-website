import "./contactstyles.css";
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';


const Contactform=()=>{
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setTimeout(() => setStatus(''), 3000);
            return;
        }

        setIsLoading(true);

        // EmailJS Configuration
        // Replace these with your actual EmailJS credentials
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setIsLoading(false);
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.error('Email send failed:', error.text);
                setStatus('failed');
                setIsLoading(false);
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return(
        <div className="form">
        <form ref={form} onSubmit={handleSubmit}>
         <label htmlFor="name"> Your Name.</label>
         <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isLoading}
         />
         <label htmlFor="email"> Email.</label>
         <input 
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
         />
         <label htmlFor="message"> Message</label>
         <textarea 
            rows="6" 
            id="message"
            name="message"
            placeholder="Type Your Message Here"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isLoading}
         />
         <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Submit'}
         </button>
         {status === 'success' && <p className="status-message success">✓ Thank you! Your message has been sent successfully.</p>}
         {status === 'error' && <p className="status-message error">✗ Please fill in all fields.</p>}
         {status === 'failed' && <p className="status-message error">✗ Failed to send message. Please try again.</p>}
        </form>
        
        </div>
    )
}

export default Contactform;