async function deleteProject(project) {
    const url =`${import.meta.env.VITE_API_URL}/projects/`;
    const token=`Token ${window.localStorage.getItem("token")}`;
    

    const response =await fetch(url, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",    
       "Authorization": token,
       
    },
    body: JSON.stringify({
        ...project,
       
    }),
    
});
    if (!response.ok){
        const fallbackError = "Error creating a new page";
        const data = await response.json().catch(() => {
            throw new Error(fallbackError)
        });

        const errorMessage = data?.detail??fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}   
export default deleteProject;
