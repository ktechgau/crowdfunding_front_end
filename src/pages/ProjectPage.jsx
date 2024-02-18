import { useParams } from "react-router-dom"; //useParams is a hook from react router dom
import useProject from "../hooks/use-project";


function ProjectPage(){
    const { id } = useParams();
    const { projectDetails, isLoading, error } = useProject(id);

    console.log("Project Data:", projectDetails);

    if (isLoading){
        return (<p> loading ...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    }
    if (!projectDetails){
        return null; //This is added to check first if project.pledges exists (not null)
    }
    return (
        <>
        <h2>{projectDetails.project.title}</h2>
        <h3>Created at: {projectDetails.project.date_created}</h3>
        <h3>{`Status: ${projectDetails.project.is_open}` }</h3>
        <h3>Pledges:</h3>
        <ul>
            {projectDetails.project.pledges && projectDetails.project.pledges.map((pledgeData, key) =>{
                return (
                    <li key={key}>
                        {project.pledgeData.amount} from {project.pledgeData.supporter}
                    </li>                
                );
             })}
        </ul>
        </>
    );

}
export default ProjectPage;