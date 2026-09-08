import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-container">

      <div className="contact-label">
        GET IN TOUCH
      </div>

      <div className="contact-content">

        <div className="contact-heading">
          <h2>
            Have a project, opportunity,
            <span> or just want to talk tech?</span>
          </h2>
        </div>

        <div className="contact-details">
          <p>
            I’m always interested in hearing about new projects,
            engineering opportunities, and interesting problems to solve.
          </p>

          <a
            href="mailto:saronnhong@gmail.com"
            className="contact-email"
          >
            saronnhong@gmail.com

            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
            />
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/saronnhong"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/saronnhong"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      <div className="contact-footer">
        <span>
          Saron Nhong
        </span>

        <span>
          Full Stack Software Engineer
        </span>
      </div>

    </div>
  </section>
);

export default Contact;
