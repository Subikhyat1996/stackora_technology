import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import './Careers.css';

const Careers = () => {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchCareers();
    }, []);

    const fetchCareers = async () => {
        try {
            const response = await axios.get('/careers');
            setCareers(response.data.data);
        } catch (error) {
            console.error('Error fetching careers:', error);
        } finally {
            setLoading(false);
        }
    };

    const departments = ['all', ...new Set(careers.map(c => c.department))];
    const filteredCareers = filter === 'all' 
        ? careers 
        : careers.filter(c => c.department === filter);

    return (
        <div className="careers-page">
            <section className="careers-hero">
                <div className="container">
                    <h1>Join Our Team</h1>
                    <p>Build the future of digital products with us</p>
                </div>
            </section>

            <section className="careers-section">
                <div className="container">
                    <div className="careers-filter">
                        {departments.map(dept => (
                            <button
                                key={dept}
                                className={`filter-btn ${filter === dept ? 'active' : ''}`}
                                onClick={() => setFilter(dept)}
                            >
                                {dept === 'all' ? 'All Positions' : dept}
                            </button>
                        ))}
                    </div>

                    {loading ? (
                        <div className="loading">Loading positions...</div>
                    ) : filteredCareers.length === 0 ? (
                        <div className="no-careers">
                            <h3>No open positions at the moment</h3>
                            <p>Check back soon or send us your resume at careers@stackora.com</p>
                        </div>
                    ) : (
                        <div className="careers-grid">
                            {filteredCareers.map(career => (
                                <Link to={`/careers/${career._id}`} key={career._id} className="career-card">
                                    <div className="career-header">
                                        <h3>{career.title}</h3>
                                        <span className="department-badge">{career.department}</span>
                                    </div>
                                    <div className="career-meta">
                                        <span>📍 {career.location}</span>
                                        <span>💼 {career.type}</span>
                                        <span>⏱️ {career.experience}</span>
                                    </div>
                                    <p className="career-excerpt">{career.description.substring(0, 150)}...</p>
                                    <div className="career-footer">
                                        <span className="apply-link">View Details →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Careers;
