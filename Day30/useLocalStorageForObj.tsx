import { useLocalStorage } from "./LocalStorageHook";

type User = {
    name:string;
    role:string;
};

const initialUser: User = {
    name:"Tharun Kumar",
    role:"React Developer"
};

function ObjectStorage(){
    const [user, setUser] = useLocalStorage<User>("user",initialUser);

    return(
        <div>
        <button onClick={() => {setUser({name:"Tharun Kumar",role:"React-Ts Dev"})}}>ChangeUser</button>
        <h1>User</h1>
        <p>Name: {user.name}</p>
        <p>Role: {user.role}</p>
        </div>
    );
}

export default ObjectStorage;