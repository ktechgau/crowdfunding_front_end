import { useState, useEffect } from "react";
import getProjectsCategory from "../api/get-project-category";

function useProjectCategory() {
    const [groupedProjects, setGroupedProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await getProjectsCategory();
                setGroupedProjects(projects);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
console.log('group projects:',groupedProjects["AGRI"]);
    return { groupedProjects, isLoading, error };
}

export default useProjectCategory;