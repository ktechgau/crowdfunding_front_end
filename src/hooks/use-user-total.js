import { useState, useEffect } from "react";
import getTotalUsers from "../api/get-user-total";

function useUserTotal() {
    const [totalUsers, setTotalUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTotalUsers()
            .then((users) => {
                setTotalUsers(users);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);
     return {totalUsers, isLoading, error};
}

export default useUserTotal;