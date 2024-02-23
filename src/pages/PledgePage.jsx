import { useParams } from "react-router-dom"; //useParams is a hook from react router dom
import useProject from "../hooks/use-project.js";
import '../components/Projects/Projectpage.css';
import {Link} from "react-router-dom";
import PledgeForm from "../components/Pledges/PledgeForm.jsx";

function ProjectPage(){
    const { id } = useParams();
    const { projectData, isLoading, error } = useProject(id);

    

    if (isLoading){
        return (<p> loading ...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    }
     if (!projectData){
         return null; //This is added to check first if project.pledges exists (not null)
    }
   
    return (
        <div className="projectPage">
            <section className="project-image">
            <img id="project-image" src={projectData.project.image}/>
            </section>

            <section className="project-details">
            <p className="text-category">You are supporting</p>
                <p className="overlayText-project"><span className="italic" id="line1-project">{projectData.project.title}</span></p>

            <section className="newProjectForm">
                <PledgeForm/>
            </section>
            </section>
            
        </div>
    );

}
export default ProjectPage;