import { useDeferredValue, useState } from "react";

function UseDeferredValueSearch(){
    const [search, setSearch] = useState("");
    const deferredSearch = useDeferredValue(search);

    return(
        <>
        <input type="text" value={search} onChange={event => setSearch(event.target.value)}/>
        <p>Search: {search}</p>
        <p>Deferred: {deferredSearch}</p>
        </>
    );
}

export default UseDeferredValueSearch;