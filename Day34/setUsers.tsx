import { useFetch } from "./useFetchHook";
import { getUsers } from "./fetchFunction";


function UserData(){
    const {data: users,loading,error} = useFetch(getUsers);

    if(loading){
        return <p>Loading Users...</p>;
    }
    if(error){
        return <p>{error}</p>;
    }

    return(
        <>
          <h1>ALL Users</h1>
          <hr color="red"/>
          {users?.map((u) => (<div key={u.id}>
            <p>Name: {u.name}</p>
            <p>Email: {u.email}</p>
            <hr />
          </div>))} 
        </>
    );
}

export default UserData;