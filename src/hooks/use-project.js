import { useState, useEffect } from "react";
import getProject from "../api/get-project";

export default function useProject(projectID) {
    const [project, setProject] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        getProject(projectID)
            .then((project) => {
                setProject(project);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [projectID]);
     return {project, isLoading, error};
}