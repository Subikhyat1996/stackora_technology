import React, { useEffect, useState } from 'react';
import './GitHubProjects.css';

const GitHubProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const GITHUB_USERNAME = 'Subikhyat1996';
    const EXCLUDED_REPOS = ['stackora_technology', 'portfolio', 'Subikhyat1996'];

    useEffect(() => {
        fetchGitHubProjects();
    }, []);

    const fetchGitHubProjects = async () => {
        try {
            const response = await fetch(
                `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
            );
            
            if (!response.ok) throw new Error('Failed to fetch projects');
            
            const data = await response.json();
            
            // Filter out excluded repos and private repos
            const filteredProjects = data
                .filter(repo => 
                    !EXCLUDED_REPOS.some(excluded => 
                        repo.name.toLowerCase().includes(excluded.toLowerCase())
                    ) && !repo.private
                )
                .slice(0, 6) // Show top 6 projects
                .map(repo => ({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description || 'No description available',
                    url: repo.html_url,
                    homepage: repo.homepage,
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    language: repo.language,
                    topics: repo.topics || [],
                    updated: new Date(repo.updated_at).toLocaleDateString()
                }));

            setProjects(filteredProjects);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="github-projects-loading">
                <div className="spinner"></div>
                <p>Loading GitHub projects...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="github-projects-error">
                <p>Unable to load GitHub projects</p>
            </div>
        );
    }

    if (projects.length === 0) {
        return null;
    }

    return (
        <section className="github-projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Open Source Projects</h2>
                    <p className="section-subtitle">
                        Explore our public repositories and contributions
                    </p>
                </div>

                <div className="github-grid">
                    {projects.map(project => (
                        <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-card"
                        >
                            <div className="github-card-header">
                                <div className="repo-icon">📦</div>
                                <h3>{project.name}</h3>
                            </div>

                            <p className="github-description">{project.description}</p>

                            {project.topics.length > 0 && (
                                <div className="github-topics">
                                    {project.topics.slice(0, 3).map((topic, index) => (
                                        <span key={index} className="topic-tag">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="github-meta">
                                {project.language && (
                                    <span className="meta-item">
                                        <span className="language-dot"></span>
                                        {project.language}
                                    </span>
                                )}
                                <span className="meta-item">
                                    ⭐ {project.stars}
                                </span>
                                <span className="meta-item">
                                    🔱 {project.forks}
                                </span>
                            </div>

                            {project.homepage && (
                                <div className="github-live">
                                    <span className="live-badge">🔗 Live Demo</span>
                                </div>
                            )}
                        </a>
                    ))}
                </div>

                <div className="github-cta">
                    <a
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <span>View All on GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GitHubProjects;
