import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faAngular, faPython, faGit, faAws } from '@fortawesome/free-brands-svg-icons';
import TypeScriptLogo from '../../assets/logos/typescript.svg';
import SqliteLogo from '../../assets/logos/sqlite.svg';
import MySQLLogo from '../../assets/logos/mysql.svg';
import MongoDBLogo from '../../assets/logos/mongodb.svg';
import lambdaLogo from '../../assets/logos/aws-lambda.svg';
import d3Logo from '../../assets/logos/d3-js.svg';
import djangoLogo from '../../assets/logos/django.svg';
import './Skills.css';

const skills = [
    { icon: faJs, name: 'JavaScript', type: 'fa' },
    { icon: TypeScriptLogo, name: 'TypeScript', type: 'svg' },
    { icon: faPython, name: 'Python', type: 'fa' },
    { icon: faAngular, name: 'Angular', type: 'fa' },
    { icon: faReact, name: 'React', type: 'fa' },
    { icon: faNodeJs, name: 'Node.js', type: 'fa' },
    { icon: SqliteLogo, name: 'SQLite', type: 'svg' },
    { icon: MySQLLogo, name: 'MySQL', type: 'svg' },
    { icon: MongoDBLogo, name: 'MongoDB', type: 'svg' },
    { icon: faGit, name: 'Git', type: 'fa' },
    { icon: faAws, name: 'AWS', type: 'fa' },
    { icon: lambdaLogo, name: 'AWS Lambda', type: 'svg' },
    { icon: d3Logo, name: 'D3 JS', type: 'svg' },
    { icon: djangoLogo, name: 'Django', type: 'svg' },
];

const Skills = () => (
    <main id="skills" className="skills-section">
        <div className="skills-title">Here are some of my best skills</div>
        <div className="skills-icons">
            {skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                    {skill.type === 'fa' ? (
                        <FontAwesomeIcon icon={skill.icon} />
                    ) : (
                        <img src={skill.icon} alt={skill.name} className="skill-svg" />
                    )}
                    <span className="skill-name">{skill.name}</span>
                </div>
            ))}
        </div>
    </main>
);

export default Skills;