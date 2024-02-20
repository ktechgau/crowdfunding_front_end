import { useParams } from "react-router-dom"; //useParams is a hook from react router dom
import useProject from "../hooks/use-project.js";
import '../components/Projects/Projectpage.css';

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
            
        <h2>{projectData.project.title}</h2>
        <p>{projectData.project.category}</p>
        <h3>Created at: {projectData.project.date_created}</h3>
        <h3>{`Status: ${projectData.project.is_open}` }</h3>
        <h3>Pledges:</h3>
        <ul>
            {projectData.project.pledges && projectData.project.pledges.map((pledgeData, key) =>{
                return (
                    <li key={key}>
                        {pledgeData.amount} from {pledgeData.supporter}
                    </li>                
                );
             })}
        </ul>
        </div>
    );

}
export default ProjectPage;