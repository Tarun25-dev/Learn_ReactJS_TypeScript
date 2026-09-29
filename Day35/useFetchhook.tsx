import { useEffect, useState } from "react";

export function useFetch<T>(fetchFunction: () => Promise<T>){
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function LoadData(){
            try{
                setError(null);
                setLoading(true);

                const result = await fetchFunction();
                setData(result);
            }
            catch{
                setError("Failed to fetch data");
            }
            finally{
                setLoading(false);
            }
        }
        LoadData();
    }, [fetchFunction]);

    return {
        data,
        loading,
        error
    }
}