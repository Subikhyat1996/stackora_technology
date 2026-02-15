import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState(null);
    const [stats, setStats] = useState({
        services: 0,
        careers: 0,
        applications: 0,
        contacts: 0
    });

    useEffect(() => {
        const adminData = localStorage.getItem('admin');
        if (adminData) {
            setAdmin(JSON.parse(adminData));
        }
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const [services, careers, applications, contacts] = await Promise.all([
                axios.get('/services'),
                axios.get('/careers'),
                axios.get('/applications'),
                axios.get('/contact')
            ]);

            setStats({
                services: services.data.data.length,
                careers: careers.data.data.length,
                applications: applications.data.data.length,
                contacts: contacts.data.data.length
            });
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('admin');
        navigate('/admin/login');
    };

    return (
        <div className="admin-dashboard">
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <h2>Stackora Admin</h2>
                    {admin && <p>{admin.name}</p>}
                </div>
                <nav className="sidebar-nav">
                    <Link to="/admin/dashboard">Dashboard</Link>
                    <Link to="/admin/services">Services</Link>
                    <Link to="/admin/careers">Careers</Link>
                    <Link to="/admin/applications">Applications</Link>
                    <Link to="/admin/projects">Projects</Link>
                    <Link to="/admin/contacts">Contacts</Link>
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                </nav>
            </aside>

            <main className="admin-content">
                <Routes>
                    <Route path="dashboard" element={
                        <div className="dashboard-home">
                            <h1>Dashboard</h1>
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <h3>Services</h3>
                                    <p className="stat-number">{stats.services}</p>
                                </div>
                                <div className="stat-card">
                                    <h3>Open Positions</h3>
                                    <p className="stat-number">{stats.careers}</p>
                                </div>
                                <div className="stat-card">
                                    <h3>Applications</h3>
                                    <p className="stat-number">{stats.applications}</p>
                                </div>
                                <div className="stat-card">
                                    <h3>Contact Inquiries</h3>
                                    <p className="stat-number">{stats.contacts}</p>
                                </div>
                            </div>
                        </div>
                    } />
                    <Route path="services" element={<div><h1>Manage Services</h1><p>Service management coming soon...</p></div>} />
                    <Route path="careers" element={<div><h1>Manage Careers</h1><p>Career management coming soon...</p></div>} />
                    <Route path="applications" element={<div><h1>Job Applications</h1><p>Application review coming soon...</p></div>} />
                    <Route path="projects" element={<div><h1>Manage Projects</h1><p>Project management coming soon...</p></div>} />
                    <Route path="contacts" element={<div><h1>Contact Inquiries</h1><p>Contact management coming soon...</p></div>} />
                </Routes>
            </main>
        </div>
    );
};

export default AdminDashboard;
