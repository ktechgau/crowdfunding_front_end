async function getProject(projectID) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectID}`;
    const response = await fetch (url,{ method: "GET"});

    if (!response.ok) {
        const fallbackError = `Error fetching project with id" ${projectID}`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default getProject;