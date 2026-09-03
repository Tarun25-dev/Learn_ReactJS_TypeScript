type mulProps = {
    name: string;
    age: number;
    city: string;
};

function MulProp1({name, age, city}: mulProps){
    return(
        <>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        </>
    );
};

export default MulProp1;