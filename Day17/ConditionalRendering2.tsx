function Login3(){
    const isLoggedIn = true;

    let message;

    if (isLoggedIn){
        message = <h2>Welcome</h2>
    } else {
        message = <h2>Please Login</h2>
    }
    return <div>{message}</div>;
}

export default Login3;
