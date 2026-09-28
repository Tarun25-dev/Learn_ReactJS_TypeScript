type User = {
    id:number;
    name: string;
    email: string;
}

export async function getUsersAPI(): Promise<User[]>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if(!response.ok){
        throw new Error("Failed to Fetch Users");
    }

    const data: User[] = await response.json();
    return data;
}

