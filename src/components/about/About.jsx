import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const skills = [
        'Angular',
        'React',
        'TypeScript',
        'D3.js',
        'Django',
        'PostgreSQL',
        'AWS'
    ];

    return (
        <main>
            <section className="hero-section">
                <div className="hero-grid-bg" />

                <div className="hero-content">
                    <div className="hero-copy">
                        <div className="hero-eyebrow">
                            Full Stack Software Engineer
                        </div>

                        <h1 className="hero-title">
                            Hi, I’m <span>Saron.</span>
                            <br />
                            I build software that makes
                            <span className="hero-highlight"> complex data feel simple.</span>
                        </h1>

                        <p className="hero-description">
                            I’m a full stack engineer with 4+ years of experience building
                            interactive web applications at Harvard University. I specialize
                            in turning complex scientific and research data into fast,
                            intuitive experiences using modern frontend technologies and
                            scalable backend systems.
                        </p>

                        <div className="hero-actions">
                            <a
                                className="primary-button"
                                href="#projects"
                            >
                                View my work
                            </a>

                            <a
                                className="secondary-button"
                                href="https://github.com/saronnhong"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                                GitHub
                            </a>

                            <a
                                className="secondary-button"
                                href="https://linkedin.com/in/saronnhong"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="code-window">
                            <div className="code-window-header">
                                <div className="window-dots">
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <span className="code-filename">saron.ts</span>
                            </div>

                            <div className="code-content">
                                <div>
                                    <span className="code-keyword">const</span>{' '}
                                    <span className="code-variable">engineer</span> = {'{'}
                                </div>

                                <div className="code-indent">
                                    <span className="code-property">focus</span>:{' '}
                                    <span className="code-string">
                                        'frontend + full stack'
                                    </span>,
                                </div>

                                <div className="code-indent">
                                    <span className="code-property">experience</span>:{' '}
                                    <span className="code-number">4+</span>,
                                </div>

                                <div className="code-indent">
                                    <span className="code-property">enjoys</span>: [
                                </div>

                                <div className="code-indent-2">
                                    <span className="code-string">
                                        'data visualization'
                                    </span>,
                                </div>

                                <div className="code-indent-2">
                                    <span className="code-string">
                                        'problem solving'
                                    </span>,
                                </div>

                                <div className="code-indent-2">
                                    <span className="code-string">
                                        'clean interfaces'
                                    </span>
                                </div>

                                <div className="code-indent">]</div>
                                <div>{'};'}</div>
                            </div>

                            <div className="tech-cloud">
                                {skills.map((skill) => (
                                    <span className="tech-pill" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about-details-section">
                <div className="about-label">ABOUT</div>

                <div className="about-details-grid">
                    <h2>
                        I like building things that are
                        <span> useful, visual, and thoughtfully engineered.</span>
                    </h2>

                    <div className="about-body">
                        <p>
                            At Harvard, I worked on applications that helped researchers
                            explore large and complex scientific datasets through interactive
                            visualizations and responsive interfaces.
                        </p>

                        <p>
                            I enjoy working across the stack—from Angular, React, TypeScript,
                            and D3.js on the frontend to APIs, Django, PostgreSQL, and AWS on
                            the backend. I’m especially interested in problems where good
                            engineering and good user experience need to work together.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;