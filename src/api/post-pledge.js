async function postPledge( pledge) {
    const url =`${import.meta.env.VITE_API_URL}/pledges/`;
    const token=`Token ${window.localStorage.getItem("token")}`;
    console.log('pledges:', pledge);
    const response =await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",    
       "Authorization": token,
       
    },
    body: JSON.stringify({
        ...pledge, 
       
    }),
    
});
    if (!response.ok){
        const fallbackError = "Error creating a new page";
        const data = await response.json().catch(() => {
            console.log("Response:", response); 
            throw new Error(fallbackError)
        });

        const errorMessage = data?.detail??fallbackError;
        throw new Error(errorMessage);
    }
    const responseData = await response.json();
    return responseData;
}   
export default postPledge;
