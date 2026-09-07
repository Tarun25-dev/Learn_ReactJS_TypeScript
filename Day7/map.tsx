function Map1(){
    const users = ["tharun", "rahul", "arun"];

    return(
        <div>
            {users.map((user) => (
                <p key={user}>{user}</p>
            ))}
        </div>
    );
}

export default Map1;

type User= {
    id: number;
    name: string;
    age: number;
};

export function Map2(){
    const profiles: User []= [{id:1,name:"Tharun",age:23},
                           {id:2,name:"Rahul",age:25},
                           {id:3,name:"Arun",age:21}];
    return(
        <div>
        {profiles.map((profile) =>(
        <div key={profile.id}>
        <h3>Name: {profile.name}</h3>
        <h4>Age: {profile.age}</h4>
        </div>
        ))}
        </div>
    );
}


// practice

type Product= {
    id: number;
    name: string;
    price: number;
};

export function Map3(){
    const profiles: Product []= [{id:1,name:"mobile",price:23000},
                           {id:2,name:"charger",price:2500},
                           {id:3,name:"laptop",price:210000}];
    return(
        <div>
        {profiles.map((profile) =>(
        <div key={profile.id}>
        <h3>Name: {profile.name}</h3>
        <h4>Price: {profile.price}</h4>
        </div>
        ))}
        </div>
    );
}