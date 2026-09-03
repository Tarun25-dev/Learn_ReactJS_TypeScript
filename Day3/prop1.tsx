type UserProp = {
    name: string;
};

function Prop1({name}: UserProp){
    return <h3>Hello! {name}</h3>;
};

export default Prop1;