async function getProjectsCategory(){
    const url = `${import.meta.env.VITE_API_URL}/projects/`; 
    const response = await fetch(url, {method: "GET"}); 
    if (!response.ok) {
        const fallbackError = "Error fetching projects";  
        const data = await response.json().catch(() =>{ 
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const projects = await response.json();
   

    const groupedProjects = projects.reduce((accumulator,project) =>{
        const category = project.category;

        if (!accumulator[category]) {
            accumulator[category] = [];
        }
        accumulator[category].push(project);

        return accumulator;

    }, {});

  

    return groupedProjects;
}
export default getProjectsCategory;