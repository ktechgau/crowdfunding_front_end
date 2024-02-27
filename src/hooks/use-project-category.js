import { useState, useEffect } from "react";
import getProjectsCategory from "../api/get-project-category";

function useProjectCategory(category) {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        getProjectsCategory(category)
            .then((groupedProjects) => {
                const categoryList = Object.keys(groupedProjects);
                setCategories(categoryList);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, [category]);
    
    console.log("Categories:", categories);
    console.log("isLoading:", isLoading);
    console.log("Error:", error);
   
     return {categories, isLoading, error};
}
export default useProjectCategory;