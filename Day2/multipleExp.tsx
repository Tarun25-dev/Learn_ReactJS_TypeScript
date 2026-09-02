function MulExp(){
   const name: string ="tharun";
   const age: number = 23;
   const isStd: boolean =true;

   return (
    <div>
    <h1>Name: {name}</h1>
    <p>Age: {age}</p>
    <p>{isStd ? "yes" : "no"}</p>
    </div>
   );
}

export default MulExp;