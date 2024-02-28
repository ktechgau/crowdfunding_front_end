import { useState } from "react";
import postUser from "../../api/post-user.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth.js";

function NewLoginForm(){
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();

    const [credentials, setCredentials] = useState ({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id,value } = event.target;
        setCredentials ((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        })
        
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postUser (
                credentials.username,
                credentials.password
            ).then ((response) => {
                window.localStorage.setItem("token", response.token);
                setAuth({
                     token: response.token,
                });
                navigate("/");
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" 
                id="username" 
                placeholder="Enter username"
                onChange={handleChange}
                />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
                <input 
                type="text" 
                id="password" 
                placeholder="Enter password"
                onChange={handleChange}
                />
            </div>
            <button type="submit">Sign Up</button>
        
        </form>
    );
}
export default NewLoginForm;