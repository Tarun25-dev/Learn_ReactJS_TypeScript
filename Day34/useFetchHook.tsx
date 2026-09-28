import { useEffect, useState } from "react";

export function useFetch<T>(fetchFunctionUsers: () => Promise<T>){
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadData(){
        try{
            setLoading(true);
            setError(null);

            const result = await fetchFunctionUsers();
            setData(result);
        }
        catch{
            setError("Something wrong!");
        }
        finally{
            setLoading(false);
        }
    }
    loadData();
    },[fetchFunctionUsers]);

    return{
        data,
        loading,
        error
    }

}