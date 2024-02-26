import { useState, useEffect } from "react";
import getUserData from "../api/get-user-data.js";

function useUser() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [userId, setUserId] = useState();
    //const { user } = useAuth();


    useEffect(() => {
        getUserData()
            .then((users) => { console.log("useUserData:", users);
                setUserId(users);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
            
        },[]);

        
        return {userId, isLoading, error};
   
}
export default useUser;