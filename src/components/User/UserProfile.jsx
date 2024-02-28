import React, {useContext} from 'react';
import { AuthContext } from '../AuthProvider';

function userProfile(){
    const { auth } = useContext(AuthContext);
    const { username, userId} =auth;

    return(
        <div>
            <h2>User Profile</h2>
        <p>username: {username}</p>
        <p>User Id: {userId}</p>
        </div>
    );

}
export default userProfile;
