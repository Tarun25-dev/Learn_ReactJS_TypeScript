type User = {
    name: string;
    id: number;
    salary: number;
};

const users: User[] = [{
    name: "tharun",
    id: 1,
    salary:56000
},{
    name:"Kumar",
    id:2,
    salary: 40000
},{
    name:"rahul",
    id:3,
    salary:96000
},{
    name:"Nani",
    id:4,
    salary:45000
}];

function DeriveNonChanginingData(){
    const derviedUsers = users.filter((user) => (user.salary) > 50000);
    return(
        <>
        {derviedUsers.map((user) => (<p key={user.id}>{user.name} - ₹{user.salary}</p>))}
        </>
    );
}

export default DeriveNonChanginingData;