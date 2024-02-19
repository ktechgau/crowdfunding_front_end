import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/Projects/ProjectCard.jsx";


function AllProjectsPage(){
    const { projects } = useProjects();
    return (
        <div id="project-list">
            {projects.map((projectData, key) =>{
                return <ProjectCard  key={key} projectData={projectData}/>;
            })}
        </div>
    );
}
export default AllProjectsPage;
