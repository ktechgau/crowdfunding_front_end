async function getTotalPledges() {
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;
    const response = await fetch (url,{ method: "GET"});
console.log(response);
    if (!response.ok) {
        const fallbackError = `Error fetching pledge amount" ${pledgeAmount}`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const pledgesData = await response.json();

    console.log("pledges",pledgesData);
    let totalPledges = 0; //use let instead of const as const is immutable
    pledgesData.forEach(pledges => { 
        totalPledges += parseFloat(pledges.amount);

    });

    return totalPledges;
   
}
export default getTotalPledges;