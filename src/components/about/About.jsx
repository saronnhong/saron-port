import './About.css';

const About = () => (
    <main id="about" >
        <section className="about-section">
            <div>Hello my name is</div>
            <div className="about-name">Saron Nhong</div>
            <div className="about-links">
                <a href="https://github.com/saronnhong" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/saronnhong" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/chich20x6/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </section>
        <div className="about-details">
            I’m a Full Stack Software Engineer with 4 years of experience building cloud-based applications at Harvard University. I specialize in creating interactive data visualization platforms and scalable web solutions using React, Angular, Node.js, and AWS. I’m passionate about turning complex datasets into intuitive, user-friendly interfaces that empower researchers and users alike.
        </div>
    </main>
);

export default About;
