function Users1(){
    const users = ["Tharun", "kumar", "nani", "rahul"];
    return(
        <>
        {users.map((user) => (<p key={user}>{user}</p>))}
        </>
    );
}

export default Users1;