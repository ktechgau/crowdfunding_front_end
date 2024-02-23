async function postPledge(projectId, pledge) {
    const url =`${import.meta.env.VITE_API_URL}/pledges/`;
    const token=`Token ${window.localStorage.getItem("token")}`;
    
    const response =await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",    
       "Authorization": token,
       
    },
    body: JSON.stringify({
        ...pledge, projectId,
       
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
export default postPledge;
