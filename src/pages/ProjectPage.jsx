import { useParams, useNavigate } from "react-router-dom"; //useParams is a hook from react router dom
import useProject from "../hooks/use-project.js";
import '../components/Projects/Projectpage.css';
import {Link} from "react-router-dom";


function ProjectPage(){
    const { id } = useParams();
    const { projectData, isLoading, error } = useProject(id);
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
            
            <section className="cta-button" id="cta-button">
                <button className= "link" 
                onClick={() => navigate(`/project/${id}/pledge`, 
                { state: { project: projectData } })}>
                Support now</button>
            </section>

            <section className="blurb">
                <p className="text"> {projectData.project.description}</p>
                <section className="cta-button" id="cta-button">
                <button className= "link" 
                onClick={() => navigate(`/project/${id}/pledge`, 
                { state: { project: projectData } })}>
                Support now</button>
            </section>

                <div className="pledges-project">
                <p className="overlayText-project"><span className="italic" id="line1-project">Pledges</span></p>
                    <div className="single-pledges">
                        <ul>
                            {projectData.project.pledges && projectData.project.pledges.map((pledgeData, key) =>{
                                return (
                                    <li key={key}>
                                    {`$${pledgeData.amount} from ${pledgeData.supporter}`}
                                    </li>                
                                    );
                             })}
                        </ul>
                    </div>
                </div>
            </section>
            </section>
        </div>
    );

}
export default ProjectPage;