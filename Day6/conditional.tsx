// condition ? true statement : false statement;

function Ternary(){
    const isLoggedIn = true;
    return(
        <div>
            {isLoggedIn ? <p>Welcome Back</p>: <p>Please Login</p>}
        </div>
    );
}

export function SingleCondition(){
    const isAdmin = true;

    return (
        <div>
            {isAdmin && <button>Admin settings</button>}
        </div>
    );
}

type UserProps = {
    isAdmin: boolean;
}
export function ConditionalWithProps({isAdmin}: UserProps){
    return (
        <div>
            <p>User Profile</p>
            {isAdmin && <p>Admin access</p>}
        </div>
    );
}


export default Ternary;




