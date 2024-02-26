import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = (props) => {
const {userId, username, token} = props;    

const [auth, setAuth] = useState({
    token: token || window.localStorage.getItem("token"),
   
    username: username || window.localStorage.getItem("username"),
});

console.log("Token from localStorage:", auth.username);
console.log("Token from localStorage:", auth.token);



return (
<AuthContext.Provider value={{ auth, setAuth }}>
{props.children}
</AuthContext.Provider>
);
}