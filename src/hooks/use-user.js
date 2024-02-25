import { useState, useEffect } from "react";
import getUserData from "../api/get-user-data.js";

function useUser() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [userData, setUserData] = useState(null);
    //const { user } = useAuth();


    useEffect(() => {
        getUserData()
            .then((users) => {
                setUserData(users);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
            
        },[]);

        console.log('user',userData);
        return {userData, isLoading, error};
   
}
export default useUser;