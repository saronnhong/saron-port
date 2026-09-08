import './Projects.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faAngular,
  faPython,
  faAws
} from '@fortawesome/free-brands-svg-icons';

import {
  faArrowUpRightFromSquare,
  faCodeBranch,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import typescriptLogo from '../../assets/logos/typescript.svg';
import lambdaLogo from '../../assets/logos/aws-lambda.svg';
import d3Logo from '../../assets/logos/d3-js.svg';
import djangoLogo from '../../assets/logos/django.svg';
import postgresqlLogo from '../../assets/logos/postgresql.svg';
import githubLogo from '../../assets/logos/github.svg';
import claudeLogo from '../../assets/logos/claude.svg';
import openAILogo from '../../assets/logos/openai.svg';

import mapDashboardImg from '../../assets/projects/dashboard_ss1-min.png';
import civetImg from '../../assets/projects/civet_ss1-min.png';
import seahorseImg from '../../assets/projects/seahorse_ss-min.png';

import salkImg1 from '../../assets/projects/salk_ss_1.png';
import salkImg2 from '../../assets/projects/salk_ss_2.png';
import salkImg3 from '../../assets/projects/salk_ss_3.png';
import salkImg4 from '../../assets/projects/salk_ss_4.png';
import salkImg5 from '../../assets/projects/salk_ss_5.png';
import salkImg6 from '../../assets/projects/salk_ss_6.png';
import salkImg7 from '../../assets/projects/salk_ss_7.png';


const projects = [
  {
    title: 'Salk Colony Manager',
    subtitle: 'Full-Stack Research Data Platform',

    description:
      'A full-stack application for managing biological research data and historical colony assignments. Built with Angular, Django, and PostgreSQL, with temporal data modeling, database constraints, triggers, views, CSV imports, and a responsive interface for complex workflows.',

    images: [
      salkImg2,
      salkImg3,
      salkImg4,
      salkImg5,
      salkImg6,
      salkImg7,
      salkImg1,
    ],

    featured: true,

    tech: [
      {
        name: 'Angular',
        icon: faAngular
      },
      {
        name: 'TypeScript',
        image: typescriptLogo
      },
      {
        name: 'Python',
        icon: faPython
      },
      {
        name: 'Django',
        image: djangoLogo
      },
      {
        name: 'PostgreSQL',
        image: postgresqlLogo
      },
      {
        name: 'AWS',
        icon: faAws
      },
      {
        name: 'GitHub',
        image: githubLogo
      },
      {
        name: 'ChatGPT',
        image: openAILogo
      },
      {
        name: 'Claude',
        image: claudeLogo
      }
    ],

    liveUrl: 'https://colony.saronnhong.com',

    githubUrl:
      'https://github.com/saronnhong/salk-colony-manager'
  },

  {
    title: 'Geospatial Insights Dashboard',

    subtitle:
      'Interactive Public Health Visualization',

    description:
      'A full-stack geospatial dashboard for exploring geographic health data through interactive maps and visualizations. Built with Angular, Leaflet, D3.js, and AWS to make large spatial datasets easier to understand and navigate.',

    images: [
      mapDashboardImg
    ],

    tech: [
      {
        name: 'Angular',
        icon: faAngular
      },
      {
        name: 'TypeScript',
        image: typescriptLogo
      },
      {
        name: 'D3.js',
        image: d3Logo
      },
      {
        name: 'AWS',
        icon: faAws
      },
      {
        name: 'Lambda',
        image: lambdaLogo
      }
    ]
  },

  {
    title: 'SEAHORSE',

    subtitle:
      'Multi-Omic Data Exploration Tool',

    description:
      'An interactive research platform for exploring large-scale multi-omic datasets across tissues. Designed to help researchers uncover associations and generate new hypotheses through responsive, data-driven visualizations.',

    images: [
      seahorseImg
    ],

    tech: [
      {
        name: 'Angular',
        icon: faAngular
      },
      {
        name: 'TypeScript',
        image: typescriptLogo
      },
      {
        name: 'Python',
        icon: faPython
      },
      {
        name: 'AWS',
        icon: faAws
      },
      {
        name: 'Lambda',
        image: lambdaLogo
      }
    ]
  },

  {
    title: 'CIVET',

    subtitle:
      'COPD Interactive Exploration Tool',

    description:
      'A data exploration platform for COPD research featuring violin plots, heatmaps, scatterplots, and bar charts. Built with Angular, D3.js, Django, and database-backed APIs, then deployed to AWS for secure research access.',

    images: [
      civetImg
    ],

    tech: [
      {
        name: 'Angular',
        icon: faAngular
      },
      {
        name: 'TypeScript',
        image: typescriptLogo
      },
      {
        name: 'D3.js',
        image: d3Logo
      },
      {
        name: 'Django',
        image: djangoLogo
      },
      {
        name: 'PostgreSQL',
        image: postgresqlLogo
      }
    ]
  }
];


const TechBadge = ({ tech }) => {
  return (
    <div className="tech-badge">

      {tech.icon ? (
        <FontAwesomeIcon
          icon={tech.icon}
          className="tech-badge-icon"
        />
      ) : (
        <img
          src={tech.image}
          alt=""
          className="tech-badge-icon tech-badge-image"
        />
      )}

      <span>{tech.name}</span>

    </div>
  );
};


const ProjectCarousel = ({ project }) => {

  const [currentImage, setCurrentImage] = useState(0);

  const images = project.images;

  const hasMultipleImages = images.length > 1;


  const previousImage = () => {

    setCurrentImage((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );

  };


  const nextImage = () => {

    setCurrentImage((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );

  };


  return (
    <div className="project-image-browser">

      {/* Browser Bar */}

      <div className="browser-bar">

        <div className="browser-dots">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-address">

          {project.liveUrl
            ? project.liveUrl.replace(/^https?:\/\//, '')
            : project.title}

        </div>

      </div>


      {/* Image */}

      <div className="carousel-image-container">

        <img
          key={currentImage}
          src={images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
          className="carousel-image"
          loading="lazy"
        />


        {/* Latest Project Badge */}

        {project.featured && (
          <div className="featured-badge">
            Latest Project
          </div>
        )}


        {/* Carousel Controls */}

        {hasMultipleImages && (
          <>

            <button
              type="button"
              className="carousel-arrow carousel-arrow-left"
              onClick={previousImage}
              aria-label="Previous screenshot"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
              />
            </button>


            <button
              type="button"
              className="carousel-arrow carousel-arrow-right"
              onClick={nextImage}
              aria-label="Next screenshot"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
              />
            </button>


            <div className="carousel-counter">

              {currentImage + 1}

              <span>/</span>

              {images.length}

            </div>

          </>
        )}

      </div>


      {/* Carousel Dots */}

      {hasMultipleImages && (
        <div className="carousel-dots">

          {images.map((_, index) => (

            <button
              type="button"
              key={index}
              className={
                `carousel-dot ${
                  index === currentImage
                    ? 'active'
                    : ''
                }`
              }
              onClick={() =>
                setCurrentImage(index)
              }
              aria-label={
                `View screenshot ${index + 1}`
              }
            />

          ))}

        </div>
      )}

    </div>
  );
};


const Projects = () => {

  return (
    <section
      id="projects"
      className="projects-section"
    >

      <div className="projects-container">


        {/* Section Heading */}

        <div className="projects-heading">

          <div>

            <div className="projects-label">
              SELECTED WORK
            </div>

            <h2>
              Projects built around
              <span> real problems.</span>
            </h2>

          </div>


          <p>
            A selection of full-stack applications,
            research platforms, and interactive data
            visualization tools I’ve designed and
            developed.
          </p>

        </div>


        {/* Projects */}

        <div className="projects-list">

          {projects.map((project, index) => (

            <article
              className={
                `project-card ${
                  project.featured
                    ? 'project-featured'
                    : ''
                }`
              }
              key={project.title}
            >


              {/* Project Number */}

              <div className="project-number">

                {String(index + 1).padStart(
                  2,
                  '0'
                )}

              </div>


              {/* Screenshot */}

              <div className="project-image-wrapper">

                <ProjectCarousel
                  project={project}
                />

              </div>


              {/* Project Details */}

              <div className="project-info">

                <div className="project-subtitle">
                  {project.subtitle}
                </div>


                <h3>
                  {project.title}
                </h3>


                <p className="project-description">
                  {project.description}
                </p>


                {/* Technologies */}

                <div className="project-tech">

                  {project.tech.map((tech) => (

                    <TechBadge
                      key={
                        `${project.title}-${tech.name}`
                      }
                      tech={tech}
                    />

                  ))}

                </div>


                {/* Links */}

                {(project.liveUrl ||
                  project.githubUrl) && (

                  <div className="project-links">


                    {project.liveUrl && (

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          project-link
                          project-link-primary
                        "
                      >

                        View Live

                        <FontAwesomeIcon
                          icon={
                            faArrowUpRightFromSquare
                          }
                        />

                      </a>

                    )}


                    {project.githubUrl && (

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          project-link
                          project-link-secondary
                        "
                      >

                        <FontAwesomeIcon
                          icon={faCodeBranch}
                        />

                        Source

                      </a>

                    )}

                  </div>

                )}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};


export default Projects;