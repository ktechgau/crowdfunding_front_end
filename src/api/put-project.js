async function putProject(projectId, projectData) {
    const url =`${import.meta.env.VITE_API_URL}/projects/${projectId}`;
    const token=`Token ${window.localStorage.getItem("token")}`;
    

    const response =await fetch(url, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",    
       "Authorization": token,
       
    },
    body: JSON.stringify({
       
       
    }),
    
});
    if (!response.ok){
        const fallbackError = "Error updating the page";
        const data = await response.json().catch(() => {
            throw new Error(fallbackError)
        });

        const errorMessage = data?.detail??fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}   
export default putProject;
