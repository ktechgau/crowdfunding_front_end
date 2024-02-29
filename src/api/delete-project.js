async function deleteProject(projectId) {
    const url =`${import.meta.env.VITE_API_URL}/projects/${projectId}`;
    const token=`Token ${window.localStorage.getItem("token")}`;
    

    const response =await fetch(url, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",    
       "Authorization": token,
       

    
}});
    if (!response.ok){
    
            throw new Error(fallbackError)
        }
        return true;

    
    }
       
export default deleteProject;
