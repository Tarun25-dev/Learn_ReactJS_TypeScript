import { useState } from "react";

function Login(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>
            {isLoggedIn ? (<p>Welcome Back</p>) : (<p>Please Login</p>)}
            <button onClick={() => {
                setIsLoggedIn(preq => !preq)
            }}>{isLoggedIn ? "Logout" : "Login"}</button>
        </div>
    );
}

export default Login;

// you can use && for if you have one statement only 

export function Login2(){
    const isLogin = true;
    return(
        <div>
            {isLogin && "Welcome Back"}
        </div>
    );
}