import { useState, useEffect } from "react";
import getTotalPledges from "../api/get-pledge-total";

function usePledgeTotal() {
    const [totalPledges, setTotalPledges] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTotalPledges()
            .then((pledges) => { console.log("pledges",pledges)
                setTotalPledges(pledges);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);
     return {totalPledges, isLoading, error};
}

export default usePledgeTotal;