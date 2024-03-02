import { useParams } from "react-router-dom"; //useParams is a hook from react router dom
import { useNavigate } from "react-router-dom";
import useProject from "../hooks/use-project.js";
import '../components/Projects/Projectpage.css';
import PledgeForm from "../components/Pledges/PledgeForm.jsx";
import deleteProject from "../api/delete-project.js";
import { useAuth } from "../hooks/use-auth.js";
import { useState, useEffect } from "react";
import putProject from "../api/put-project.js";
import UpdateProjectForm from "../components/Projects/UpdateProjectForm.jsx"
import DeleteConfirmationPage from "./DeleteConfirmationPage.jsx";

function ProjectPage(){
    const { id } = useParams();
    const {auth} = useAuth();   
    const [isDeleteProject, setDeleteProject] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    const [showDeleted, setShowDeleted] = useState(false);
    const { projectData, isLoading, error } = useProject(id);
    const navigate = useNavigate();
    
    useEffect(()=> {
        if (showDeleted){
            setDeleteProject(false);
            setShowDeleted(false);
        }
    }, [showDeleted]);
    
    if (isLoading){
        return (<p> loading ...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    }
     if (!projectData){
         return null; //This is added to check first if project.pledges exists (not null)
    }
    if (!auth || !projectData){
        return null;
    }
   
    const owner = projectData.project.owner;
    const userToken = auth.token;
    const userId = auth.userId;
    const isOwner = owner === userId;
    
    console.log('isOwner',isOwner)
    // console.log("username:", userToken);
    // console.log("owner:", owner);
    // console.log("userid:", userId);

    const handleDelete = async () =>{
        try{
            const isDeleted = await deleteProject(projectData.project.id);
            if (isDeleted){
               navigate("/deleted");

            }
       
    } catch (error){
            console.error ("error deleting project", error);
        }
    };

    const handleUpdate = async () =>{
        
        try{
            await putProject(projectData.project.id);
            setIsUpdated(true);
            console.log("isUpdated:", isUpdated);
        } catch(error){
            console.error ("error updating project", error);
        }
    }

    return (
        <>
        {showDeleted ? (
        <DeleteConfirmationPage/>
    ):(
        <div className="projectPage">
           

            <section className="project-details">
                <section className="project-title">
                <p className="overlayText-project"><span className="italic" id="line1-project">{projectData.project.title}</span></p>
                
                <p className="text-category">Category: {projectData.project.category}</p>
                <p className="text-category">{`Status: ${projectData.project.is_open}` }</p>
                </section>

                <section className="project-image">
            <img id="project-image" src={projectData.project.image}/>
            </section>

            </section>

            <section className="blurb2">
                <p className="text"> {projectData.project.description}</p>
                <div className="divide">
                
                
                
                {isOwner && (
                    <>
                    <section className="featureButtons">
                    
                        {/*Update project*/}
                        {!isUpdated ? (
                        <button className="cta-button" onClick={handleUpdate}>Update</button>)
                        :(
                           <>
                       <div className update-project-form >
                      <UpdateProjectForm />
                      </div> 
                        </>
                        )}
                    
                    
                    {/* Confirm delete button*/}
                    {!isDeleteProject ? (
                            
                            <button className="cta-button" onClick={() => setDeleteProject(true)}>Delete</button>)
                            : (
                                
                                <>
                                <div>
                                <p> Sure?</p>
                                </div>
                                <button className="cta-button"onClick = {handleDelete}>Yes
                                
                                </button>
                                <button className="cta-button"onClick = {() => setDeleteProject(false)}>No</button>
                                </>
                                
                        )}
                    
                    </section>

                    {/* <section className="featureButtons2">
                       
                        
                    </section> */}
                

                    {/* <div>
                        {/* Delete confirmation 
                        {showDeleted && 
                            <DeleteConfirmationPage />
                            // <div className="delete">
                            //     <p> Your project has been successfully deleted!</p>
                            // <button onClick={() => navigate('/projects')}>
                            //     Back to Projects</button>
                            // </div>
                        }
                    </div> */}
                    
                    </>
                    )}
                </div>

                <div>
                <p className="text-category">Would you like to support this goal?</p>
                <PledgeForm  projectId={projectData.project.id}/>    
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
    )}
        </>
    );

}
export default ProjectPage;