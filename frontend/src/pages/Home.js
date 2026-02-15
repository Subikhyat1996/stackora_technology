import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import GitHubProjects from '../components/GitHubProjects';
import Testimonials from '../components/Testimonials';
import StatsCounter from '../components/StatsCounter';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchServices();
        fetchProjects();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('/services');
            setServices(response.data.data.slice(0, 6));
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    const fetchProjects = async () => {
        try {
            const response = await axios.get('/projects?featured=true');
            setProjects(response.data.data.slice(0, 3));
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">We Build Custom Digital Products</h1>
                            <p className="hero-subtitle">Web • SaaS • AI • Automation</p>
                            <p className="hero-description">
                                From idea to launch, we design and build scalable digital solutions.
                            </p>
                            <div className="hero-cta">
                                <Link to="/contact" className="btn-primary">Start Your Project</Link>
                                <Link to="/services" className="btn-secondary">View Services</Link>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="geometric-shape shape-1"></div>
                            <div className="geometric-shape shape-2"></div>
                            <div className="geometric-shape shape-3"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
                <div className="container">
                    <h2 className="section-title">What We Build</h2>
                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service._id} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '2rem' }}>
                        <Link to="/services" className="btn-secondary">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div className="container">
                    <div className="about-content">
                        <h2 className="section-title">About Stackora</h2>
                        <p className="about-text">
                            Stackora Technologies helps businesses and startups turn ideas into real digital products.
                        </p>
                        <p className="about-text">
                            We focus on clean architecture, scalable systems, and solutions that actually solve problems.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process">
                <div className="container">
                    <h2 className="section-title">How We Work</h2>
                    <div className="process-grid">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <h3>Understand</h3>
                            <p>We dive into your idea and business goals to define the right solution.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <h3>Choose</h3>
                            <p>We select the right technology stack for performance and scalability.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <h3>Build</h3>
                            <p>We build, launch, and provide ongoing support for your product.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="why-us">
                <div className="container">
                    <h2 className="section-title">Why Choose Stackora</h2>
                    <div className="features-grid">
                        <div className="feature">
                            <span className="feature-icon">✓</span>
                            <p>Clean & scalable architecture</p>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">✓</span>
                            <p>Fast MVP delivery</p>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">✓</span>
                            <p>No over-engineering</p>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">✓</span>
                            <p>Long-term support</p>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">✓</span>
                            <p>Founder-led execution</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Counter */}
            <StatsCounter />

            {/* Projects Section */}
            {projects.length > 0 && (
                <section className="work">
                    <div className="container">
                        <h2 className="section-title">Recent Work</h2>
                        <div className="work-grid">
                            {projects.map((project) => (
                                <div key={project._id} className="work-card">
                                    <div className="work-image" style={{ 
                                        backgroundImage: project.image ? `url(${project.image})` : 'none' 
                                    }}></div>
                                    <div className="work-info">
                                        <h3>{project.title}</h3>
                                        <div className="work-tags">
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="work-cta">
                            <Link to="/contact" className="btn-primary">Let's Build Yours</Link>
                        </div>
                    </div>
                </section>
            )}

            {/* GitHub Projects Section */}
            <GitHubProjects />

            {/* Testimonials */}
            <Testimonials />
        </div>
    );
};

export default Home;
