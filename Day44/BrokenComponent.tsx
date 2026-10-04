function BrokenComponent(){
    throw new Error("Something Went Wrong!");
    return(
        <div>
        <p>This Wont render</p>
        </div>
    );
}

export default BrokenComponent;