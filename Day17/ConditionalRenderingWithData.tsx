type User = {
    name: string;
}

function Login4(){
    const user: User | null = {
        name: "Tharun"
    }
    return(
        <div>
            {user ? (<p>Hello {user.name}</p>) : (<p>No user found</p>)}
        </div>
    );
}

export default Login4;