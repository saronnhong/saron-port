import './About.css';
import { useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const headers = [
        "Who I am:",
        "The person behind the work:",
        "My story:",
        "Meet the developer:",
        "Behind the code:",
        "A bit about me:",
        "This is",
        "Hi, I’m",
        "About the developer:",
        "Profile:",
        "Introduction:",
        "Get to know me:",
        "A quick intro:",
        "Hello",
        "Nice to meet you, I’m",
        "Let me introduce myself:",
        "Bio:",
        "Who’s behind the screen:",
        "Developer profile:"
    ];

    const randomHeader = useMemo(() => {
        return headers[Math.floor(Math.random() * headers.length)];
    }, []);

    return (
        <main>
            <section className="about-section">
                <div className="about-header">
                    <div className="about-hello">{randomHeader}</div>
                    <div className="about-name">Saron Nhong</div>
                </div>
                <div className="about-links">
                    <a href="https://github.com/saronnhong" target="_blank" rel="noopener noreferrer">
                        <span className="desktop-text">GitHub</span>
                         <FontAwesomeIcon data-testid="github-icon" className="mobile-icon" icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/saronnhong" target="_blank" rel="noopener noreferrer">
                        <span className="desktop-text">LinkedIn</span>
                        <FontAwesomeIcon data-testid="linkedin-icon" className="mobile-icon" icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/chich20x6/" target="_blank" rel="noopener noreferrer">
                        <span className="desktop-text">Instagram</span>
                        <FontAwesomeIcon data-testid="instagram-icon" className="mobile-icon" icon={faInstagram} />
                    </a>
                </div>
            </section>
            <div id="about" className="about-details">
                I’m a Full Stack Software Engineer with 4 years of experience building cloud-based applications at Harvard University. I specialize in creating interactive data visualization platforms and scalable web solutions using Angular, React, Node.js, Python, Django, PostgreSQL (Aurora), MongoDB, and AWS cloud services. I’m passionate about turning complex datasets into intuitive, user-friendly interfaces that empower researchers and users alike.
            </div>
        </main>
    )
};

export default About;
