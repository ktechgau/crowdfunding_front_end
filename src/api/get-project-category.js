async function getProjectsCategory(){
    const url = `${import.meta.env.VITE_API_URL}/projects/`; //define your endpoint
    const response = await fetch(url, {method: "GET"}); //the promise

    if (!response.ok) {
        const fallbackError = "Error fetching projects";   //sets the error message
        const data = await response.json().catch(() =>{ //if doesn't return the json data, it will catch it and throw the error
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const projects = await response.json();
    //console.log(projects);

    //place projects in categories
    const groupedProjects = projects.reduce((accumulator,project) =>{
        const category = project.category;

        if (!accumulator[category]) {
            accumulator[category] = [];
        }
        accumulator[category].push(project);

        // Debug: Log category, accumulator, and project
        // console.log("Category:", category);
        // console.log("Accumulator:", accumulator);
        // console.log("Project:", project);
        return accumulator;

    }, {});

  

    return groupedProjects;
}
export default getProjectsCategory;