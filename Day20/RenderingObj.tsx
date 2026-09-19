type User = {
    id: number;
    name: string;
};

const users: User[] = [
    {id:3225, name:"Tharun"},
    {id:3226, name:"Kumar"},
    {id:3227, name:"Nani"},
    {id:3228, name:"Rahul"},
];

function Users(){
    return(
        <>
        {users.map((user) => (<p key={user.id}>{user.name}</p>))}
        </>
    );
}

export default Users;