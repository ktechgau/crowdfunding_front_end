async function getTotalUsers() {
    const url = `${import.meta.env.VITE_API_URL}/users/`;
    const response = await fetch (url,{ method: "GET"});

    if (!response.ok) {
        const fallbackError = `Error fetching project with id" ${userId}`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const usersData = await response.json();
    const totalUsers= usersData.length;
    console.log("Total Users", totalUsers); 
    return totalUsers;
   
}
export default getTotalUsers;