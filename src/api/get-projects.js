async function getProjects(){
    const url = `${import.meta.env.VITE_API_URL}/projects`; //define your endpoint
    const response = await fetch(url, {method: "GET"}); //the promise

    if (!response.ok) {
        const fallbackError = "Error fetching projects";   //sets the error message
        const data = await response.json().catch(() =>{ //if doesn't return the json data, it will catch it and throw the error
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default getProjects;