import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../api/axios';
import './CareerDetail.css';

const CareerDetail = () => {
    const { id } = useParams();
    const [career, setCareer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        experience: '',
        portfolio: '',
        linkedin: '',
        github: '',
        coverLetter: ''
    });
    const [resume, setResume] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCareer();
    }, [id]);

    const fetchCareer = async () => {
        try {
            const response = await axios.get(`/careers/${id}`);
            setCareer(response.data.data);
        } catch (error) {
            console.error('Error fetching career:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });
        data.append('career', id);
        if (resume) {
            data.append('resume', resume);
        }

        try {
            await axios.post('/applications', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setSuccess(true);
            setFormData({
                firstName: '', lastName: '', email: '', phone: '',
                location: '', experience: '', portfolio: '', linkedin: '',
                github: '', coverLetter: ''
            });
            setResume(null);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to submit application');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="loading-page">Loading...</div>;
    if (!career) return <div className="error-page">Career not found</div>;

    return (
        <div className="career-detail-page">
            <section className="career-detail-hero">
                <div className="container">
                    <Link to="/careers" className="back-link">← Back to Careers</Link>
                    <h1>{career.title}</h1>
                    <div className="career-meta-large">
                        <span>📍 {career.location}</span>
                        <span>💼 {career.type}</span>
                        <span>⏱️ {career.experience}</span>
                        <span className="department-badge">{career.department}</span>
                    </div>
                </div>
            </section>

            <section className="career-detail-content">
                <div className="container">
                    <div className="career-layout">
                        <div className="career-info">
                            <div className="info-section">
                                <h2>About the Role</h2>
                                <p>{career.description}</p>
                            </div>

                            {career.responsibilities && career.responsibilities.length > 0 && (
                                <div className="info-section">
                                    <h2>Responsibilities</h2>
                                    <ul>
                                        {career.responsibilities.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {career.requirements && career.requirements.length > 0 && (
                                <div className="info-section">
                                    <h2>Requirements</h2>
                                    <ul>
                                        {career.requirements.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {career.benefits && career.benefits.length > 0 && (
                                <div className="info-section">
                                    <h2>Benefits</h2>
                                    <ul>
                                        {career.benefits.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="application-form-container">
                            <h2>Apply for this Position</h2>
                            
                            {success && (
                                <div className="alert alert-success">
                                    Application submitted successfully! We'll review it and get back to you soon.
                                </div>
                            )}
                            {error && <div className="alert alert-error">{error}</div>}

                            <form onSubmit={handleSubmit} className="application-form">
                                <div className="form-row">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name *"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name *"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email *"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone *"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Current Location *"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    type="text"
                                    name="experience"
                                    placeholder="Years of Experience *"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    type="url"
                                    name="portfolio"
                                    placeholder="Portfolio URL"
                                    value={formData.portfolio}
                                    onChange={handleChange}
                                />

                                <input
                                    type="url"
                                    name="linkedin"
                                    placeholder="LinkedIn Profile"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                />

                                <input
                                    type="url"
                                    name="github"
                                    placeholder="GitHub Profile"
                                    value={formData.github}
                                    onChange={handleChange}
                                />

                                <div className="file-input">
                                    <label>Resume (PDF or DOC) *</label>
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </div>

                                <textarea
                                    name="coverLetter"
                                    placeholder="Cover Letter (Optional)"
                                    rows="5"
                                    value={formData.coverLetter}
                                    onChange={handleChange}
                                ></textarea>

                                <button type="submit" className="btn-primary" disabled={submitting}>
                                    {submitting ? 'Submitting...' : 'Submit Application'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareerDetail;
