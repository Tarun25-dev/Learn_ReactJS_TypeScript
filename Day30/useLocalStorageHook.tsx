import { useLocalStorage } from "./LocalStorageHook";

export default function Details(){
    const [name, setName] = useLocalStorage<string>("name","");
    return(
        <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Name: {name}</p>
        </>
    );

}
