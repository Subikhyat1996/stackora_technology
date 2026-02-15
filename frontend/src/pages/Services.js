import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('/services');
            setServices(response.data.data);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="services-page">
            <section className="services-hero">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>End-to-end digital product development</p>
                </div>
            </section>

            <section className="services-section">
                <div className="container">
                    {loading ? (
                        <div className="loading">Loading services...</div>
                    ) : (
                        <div className="services-grid">
                            {services.map(service => (
                                <div key={service._id} className="service-card-detailed">
                                    <div className="service-icon-large">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    {service.features && service.features.length > 0 && (
                                        <ul className="service-features">
                                            {service.features.map((feature, index) => (
                                                <li key={index}>✓ {feature}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {service.pricing && (
                                        <div className="service-pricing">
                                            Starting from ${service.pricing.startingFrom}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="services-cta">
                        <h2>Ready to start your project?</h2>
                        <p>Let's discuss how we can help bring your idea to life</p>
                        <Link to="/contact" className="btn-primary">Get Started</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
