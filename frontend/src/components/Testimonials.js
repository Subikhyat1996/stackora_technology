import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            content: "Stackora Technologies transformed our business idea into a fully functional SaaS platform. Their attention to detail and technical expertise is outstanding.",
            author: "Sarah Johnson",
            role: "CEO, TechStart Inc",
            rating: 5,
            avatar: "SJ"
        },
        {
            id: 2,
            content: "Working with Stackora was a game-changer. They delivered our MVP in record time without compromising on quality. Highly recommended!",
            author: "Michael Chen",
            role: "Founder, InnovateLab",
            rating: 5,
            avatar: "MC"
        },
        {
            id: 3,
            content: "The team's expertise in AI integration helped us automate our workflows and save countless hours. Professional and reliable.",
            author: "Emily Rodriguez",
            role: "Operations Manager, FlowCo",
            rating: 5,
            avatar: "ER"
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">What Our Clients Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <p className="testimonial-content">"{testimonial.content}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <h4>{testimonial.author}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="rating">
                                {'⭐'.repeat(testimonial.rating)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
