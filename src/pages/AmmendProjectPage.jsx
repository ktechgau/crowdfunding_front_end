import { useParams, useNavigate } from "react-router-dom"; //useParams is a hook from react router dom
import useProjectPut from "../hooks/use-user.js";
import '../components/Projects/Projectpage.css';
import AmmendProjectForm from "../components/Projects/AmmendProjectForm.jsx";
import {Link} from "react-router-dom";


function AmmendProjectPage(){

    const { id } = useParams();
    const { projectData, isLoading, error, ammendProjectData } = useProject(id);
    const navigate = useNavigate();
   
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
                <p className="overlayText-project"><span className="italic" id="line1-project">{projectData.project.title}</span></p>
                <p className="text-category">Category: {projectData.project.category}</p>
                <p className="text-category">{`Status: ${projectData.project.is_open}` }</p>
            </section>

            <section className="blurb">
                <div className="divide">
                <p className="text-category">Make your changes below</p>
                <AmmendProjectForm/>    
                </div>
            </section>
                
        </div>
    );

}
export default AmmendProjectPage;

