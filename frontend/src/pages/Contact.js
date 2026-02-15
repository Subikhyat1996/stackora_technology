import React, { useState } from 'react';
import axios from '../api/axios';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('/contact', formData);
            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', company: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <h1>Let's Build Something Great</h1>
                    <p>Have a project in mind? We'd love to hear about it.</p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p>Tell us about your project and we'll get back to you within 24 hours.</p>
                            
                            <div className="contact-details">
                                <div className="contact-item">
                                    <h3>Email</h3>
                                    <p>hello@stackora.com</p>
                                </div>
                                <div className="contact-item">
                                    <h3>Location</h3>
                                    <p>Remote-first team</p>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            {success && (
                                <div className="alert alert-success">
                                    Thank you for contacting us! We'll get back to you within 24 hours.
                                </div>
                            )}
                            {error && (
                                <div className="alert alert-error">{error}</div>
                            )}

                            <div className="form-row">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>

                            <textarea
                                name="message"
                                placeholder="Tell us about your project *"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>

                            <button type="submit" className="btn-primary" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
