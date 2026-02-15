import React, { useState, useEffect, useRef } from 'react';
import './StatsCounter.css';

const StatsCounter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        { id: 1, value: 50, suffix: '+', label: 'Projects Delivered' },
        { id: 2, value: 30, suffix: '+', label: 'Happy Clients' },
        { id: 3, value: 5, suffix: '+', label: 'Years Experience' },
        { id: 4, value: 98, suffix: '%', label: 'Client Satisfaction' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const Counter = ({ end, suffix }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isVisible) return;

            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }, [isVisible, end]);

        return <span>{count}{suffix}</span>;
    };

    return (
        <section className="stats-counter" ref={sectionRef}>
            <div className="container">
                <div className="stats-grid">
                    {stats.map(stat => (
                        <div key={stat.id} className="stat-item">
                            <div className="stat-value">
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
