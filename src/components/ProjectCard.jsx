import {Link} from "react-router-dom";
import "./ProjectCard.css";



function ProjectCard(props) {
    const { projectData } = props;
    const projectLink = `/project/${projectData.id}`;

    return (
    <div className="project-card">
    <Link className="projectLink" to={projectLink}>
        <img src={projectData.image}/>
        <h3>{projectData.title}</h3>
        <h4>{projectData.description}</h4>
        <p>Category: {projectData.category}</p>
        <p>{projectData.goal}</p>
        <p>Goal amount: {projectData.amount_to_raise}</p>
    </Link>
    </div>
    );
}
export default ProjectCard;