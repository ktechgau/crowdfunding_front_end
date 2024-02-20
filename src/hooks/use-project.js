import { useState, useEffect } from "react";
import getProject from "../api/get-project";

function useProject(projectId) {
    const [projectData, setProject] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        getProject(projectId)
            .then((project) => {
                setProject(project);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [projectId]);
    
     return {projectData, isLoading, error};
}
export default useProject;