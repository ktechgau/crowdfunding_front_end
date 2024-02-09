import { useParams } from "react-router-dom";
import userProject from "../hooks/use-project";

function ProjectPage(){
    const { id } = useParams();
    const { project, isLoading, error } = userProject(id);

    if (isLoading){
        return (<p> loading ...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    }
    if (!project){
        return null; //This is added to check first if project.pledges exists (not null)
    }
    return (
        <>
        <h2>{project.title}</h2>
        <h3>Created at: {project.date_created}</h3>
        <h3>{`Status: ${project.is_open}` }</h3>
        <h3>Pledges:</h3>
        <ul>
            {project.pledges && project.pledges.map((pledgeData, key) =>{
                return (
                    <li key={key}>
                        {pledgeData.amount} from {pledgeData.supporter}
                    </li>                
                );
             })}
        </ul>
        </>
    );

}
export default ProjectPage;