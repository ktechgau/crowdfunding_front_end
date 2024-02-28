import { useState } from "react";
import postLogin from "../../api/post-login.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth.js";

function LoginForm(){
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
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            try{
                const response = await postLogin(
                    credentials.username,
                    credentials.password, 
                );
                window.localStorage.setItem("token", response.token); 
                setAuth({
                     token: response.token,
                     username: response.username, 
                     userId: response.user_id,   
                })
                navigate("/");
            } catch(error){
                console.error("login error: ", error);
            }}};


            return (
                <>
            <section className="form-container">
            <form onClick={handleSubmit}>
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
            </form>
            </section>
            <section className="cta-button" id="cta-button">
            <button className="link" type="submit">Login</button>
            </section>
        
         </>
       
    );
}
export default LoginForm;