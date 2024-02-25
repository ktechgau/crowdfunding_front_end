import { useParams } from "react-router-dom"; //useParams is a hook from react router dom
import { useState } from "react";
import useProject from "../hooks/use-project.js";
import '../components/Projects/Projectpage.css';
import PledgeForm from "../components/Pledges/PledgeForm.jsx";
import deleteProject from "../api/delete-project.js";
import useUser from "../hooks/use-user.js";

function ProjectPage(){
    const { id } = useParams();
    const { projectData, isLoading, error } = useProject(id);
    const [isDeleteProject, setDeleteProject] = useState(false);
    const {userData, isLoading: userIsLoading, error: userError} = useUser;
   
    console.log("userdata",userData);
   
    if (isLoading || userIsLoading){
        return (<p> loading ...</p>)
    }
    if (error || userError) {
        return (<p>{error.message}</p>)
    }
     if (!projectData){
         return null; //This is added to check first if project.pledges exists (not null)
    }
   

    // assigns isOwner to (user is current logged in user, user.id is their login id. owner_id is the id assigned to the project)
    const isOwner = userData && userData.id === projectData.project.owner;
    console.log(isOwner);

    const handleDelete = async () =>{
        try{
            await deleteProject(projectData.project);
        // later add a redirect to a delete confirmaton page
        } catch (error){
            console.error ("error deleting project", error);
        }
    };


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
                <p className="text"> {projectData.project.description}</p>
                <div className="divide">
                
                {/* Form only appears if user is owner of project and is logged in*/} 
                {isOwner && (
                    <div>
                        {/* Confirm delete button*/}
                        {!isDeleteProject ? (
                            <button onClick={() => setDeleteProject(true)}>Delete Project</button>)
                            : (
                                <>
                                <p> Are you sure you want to delete this page?</p>
                                <button onClick = {handleDelete}>Yes, delete this page</button>
                                <button onClick = {() => setDeleteProject(false)}>No do not delete</button>
                                </>
                                
                        )}
                      
                    </div>
                )};
                
                <p className="text-category">Would you like to support this goal?</p>
                <PledgeForm projectId={projectData.project.id}/>    
                </div>

                <section className="pledges-project">
                <p className="overlayText-project"><span className="italic" id="line1-project">Pledges</span></p>
                    <div className="single-pledges">
                        <ul>
                            {projectData.project.pledges && projectData.project.pledges.map((pledgeData, key) =>{
                                return (
                                    <li className="list-pledges" key={key}>
                                    <p className="text-pledge">{`$${pledgeData.amount} from ${pledgeData.supporter}`}</p>
                                    <p className="text-pledge">{`${pledgeData.comment}`}</p>
                                    </li>                
                                    );
                             })}
                        </ul>
                    </div>
                </section>
            </section> 
        </div>
    );

}
export default ProjectPage;