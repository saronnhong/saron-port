// import './About.css';
// import { useMemo } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

// const About = () => {
//     const headers = [
//         "Who I am:",
//         "The person behind the work:",
//         "My story:",
//         "Meet the developer:",
//         "Behind the code:",
//         "A bit about me:",
//         "This is",
//         "Hi, I’m",
//         "About the developer:",
//         "Profile:",
//         "Introduction:",
//         "Get to know me:",
//         "A quick intro:",
//         "Hello",
//         "Nice to meet you, I’m",
//         "Let me introduce myself:",
//         "Bio:",
//         "Who’s behind the screen:",
//         "Developer profile:"
//     ];

//     const randomHeader = useMemo(() => {
//         return headers[Math.floor(Math.random() * headers.length)];
//     }, []);

//     return (
//         <main>
//             <section className="about-section">
//                 <div className="about-header">
//                     <div className="about-hello">{randomHeader}</div>
//                     <div className="about-name">Saron Nhong</div>
//                 </div>
//                 <div className="about-links">
//                     <a href="https://github.com/saronnhong" target="_blank" rel="noopener noreferrer">
//                         <span className="desktop-text">GitHub</span>
//                         <FontAwesomeIcon data-testid="github-icon" className="mobile-icon" icon={faGithub} />
//                     </a>
//                     <a href="https://linkedin.com/in/saronnhong" target="_blank" rel="noopener noreferrer">
//                         <span className="desktop-text">LinkedIn</span>
//                         <FontAwesomeIcon data-testid="linkedin-icon" className="mobile-icon" icon={faLinkedin} />
//                     </a>
//                     <a href="https://www.instagram.com/chich20x6/" target="_blank" rel="noopener noreferrer">
//                         <span className="desktop-text">Instagram</span>
//                         <FontAwesomeIcon data-testid="instagram-icon" className="mobile-icon" icon={faInstagram} />
//                     </a>
//                 </div>
//             </section>
//             <div id="about" className="about-details">
//                 I’m a Full Stack Software Engineer with 4+ years of experience building web applications at Harvard University, where I helped turn complex scientific and research data into tools people could actually explore and understand. I enjoy working across the stack—from crafting interactive visualizations and responsive interfaces with Angular, React, and D3.js to building APIs, designing databases, and deploying applications on AWS.
//                 <br></br>
//                 <br></br>
//                 I’m especially drawn to projects where there’s a challenging problem behind the interface. Whether I’m making large datasets easier to navigate, improving application performance, or figuring out the architecture for a new feature, I like building software that is thoughtful, practical, and genuinely useful.            </div>
//         </main>
//     )
// };

// export default About;


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