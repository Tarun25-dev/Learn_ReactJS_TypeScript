type UserProps = {
    isLoggedIn: boolean;
    isAdmin: boolean;
};

function User({isLoggedIn, isAdmin}: UserProps){
    return(
        <>
        {!isLoggedIn ? (<p>Please Login</p>): isAdmin ? (<p>Welcome Admin</p>): (<p>Welcome User</p>)}
        </>
    );
}

export default User;
