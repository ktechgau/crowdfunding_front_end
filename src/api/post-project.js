async function postProject(title,description,goal, image,dateCreated) {
    const url =`${import.meta.env.VITE_API_URL}/projects/`;
    const token=window.localStorage.getItem("token")
    console.log("Token:", token);

    const headers = {
        "Content-Type": "application/json",    
    };
    
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    
    console.log("Headers:", headers); // Log the headers here

    const response =await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",    
       "Authorization": `Bearer ${token}`,
       
    },
    
    
    

   
    body: JSON.stringify({
        "title": title,
        "description": description,
         "goal": parseInt(goal),
         "image": image,
         "is_open":true,
         "date_created": dateCreated,
         //"category": category,
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
export default postProject;
