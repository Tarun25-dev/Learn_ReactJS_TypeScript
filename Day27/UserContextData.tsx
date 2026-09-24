import { createContext } from "react";


type User = {
    name: string;
    role: string;
};

export const UserContextObj = createContext<User>({name:"",role:""});
