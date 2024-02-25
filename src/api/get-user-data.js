async function getUserData() {
    const url = `${import.meta.env.VITE_API_URL}/users/`;
    const token=`Token ${window.localStorage.getItem("token")}`;
console.log('fetching user data');
    const response = await fetch (url,{ 
        method: "GET",
        headers: {
            "Content-Type": "application/json",    
            "Authorization": token,
        }
    });

    if (!response.ok) {
        const fallbackError = `Error fetching project with id" ${userId}`;
        const data = await response.json().catch(() => {
            throw new Error(getUserIdfallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const userData = await response.json();
    
    return userData;  
   
}
export default getUserData;