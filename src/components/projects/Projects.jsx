import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import typescriptLogo from '../../assets/logos/typescript.svg';
import lambdaLogo from '../../assets/logos/aws-lambda.svg';
import d3Logo from '../../assets/logos/d3-js.svg';
import djangoLogo from '../../assets/logos/django.svg';
import mapDashboardImg from '../../assets/projects/dashboard_ss1-min.png'; // example image
import civetImg from '../../assets/projects/civet_ss1-min.png'; // add more images as needed
import seahorseImg from '../../assets/projects/seahorse_ss-min.png'; // add more images as needed

const projects = [
  {
    title: 'Map Dashboard - Geographic Data Visualization',
    description:
      'A full-stack interactive dashboard displaying geographic data using Leaflet and D3.js. Built with a responsive interface to explore spatial datasets dynamically.',
    image: mapDashboardImg,
    tech: [faAngular, typescriptLogo, d3Logo, faAws, lambdaLogo]
  },
  {
    title: 'SEAHORSE - Multi-Omic Data Exploration Tool',
    description:
      'A web application for exploratory analysis of large-scale multi-omic datasets, enabling users to discover novel hypotheses through interactive visualizations.',
    image: seahorseImg,
    tech: [faAngular, typescriptLogo, faAws, faPython, lambdaLogo]
  },
  {
    title: 'CIVET - Interactive COPD Data Exploration Tool',
    description:
      'An Angular and D3.js web application for exploring COPD datasets, including violin plots, heatmaps, scatterplots, and bar charts, deployed on AWS for secure access.',
    image: civetImg,
    tech: [faAngular, typescriptLogo, d3Logo, djangoLogo, faDatabase]
  }
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Projects</h2>
    {projects.map((project, index) => (
      <div
        className={`project-item ${index % 2 === 0 ? 'normal' : 'reverse'}`}
        key={project.title}
      >
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tech.map((tech, i) =>
              typeof tech === 'object' && tech.icon ? (
                <FontAwesomeIcon
                  key={i}
                  icon={tech}
                  className="tech-icon"
                />
              ) : (
                <img
                  key={i}
                  src={tech}
                  alt="tech"
                  className="tech-icon-svg"
                />
              )
            )}
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default Projects;
