type UserProps = {
    name: string;
    age: number;
    city?:string;
};

function Props({name, age, city}: UserProps){
    return(
        <>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{city}</h3>
    </>
    );
};

export default Props;
