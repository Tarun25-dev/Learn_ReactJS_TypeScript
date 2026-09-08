function Click(){
    function handleClick(){
        console.log("Button Clicked");
    }
    return <button onClick={handleClick}>Click</button>
}

export function PassArgEvent(){
    function EventClick(name: string){
                console.log(`Hello ${name}`);
    }
    return <button onClick={() => {EventClick("Tharun")}}>Click Me</button>;
}

export default Click;