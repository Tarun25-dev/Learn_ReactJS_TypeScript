type UserButtonProps = {
    onSelect: (name: string) => void;
}

function Child1({onSelect}: UserButtonProps){
    return(
        <button onClick={() => {
            onSelect("Tharun");
        }}>Select User</button>
    );
}
export default Child1;

export function Parent1(){
    function handleSelect(name:string){
        console.log(`Selected Name: ${name}`);
    }
    return(
        <div>
            <Child1 onSelect={handleSelect} />
        </div>
    );
}