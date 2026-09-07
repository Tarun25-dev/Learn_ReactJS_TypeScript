type User = {
    isLoggedIn: boolean;
    isAdmin: boolean;
};

function PracticeCond({isLoggedIn, isAdmin}: User){
    return(
        <>
        {isLoggedIn ? (<p>Welcome User</p>): <p>Please Login</p>}
        {isAdmin && (<p>Admin Panel</p>)}
        </>
    );
}

export default PracticeCond;