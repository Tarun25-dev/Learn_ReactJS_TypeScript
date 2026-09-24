import { createContext } from "react";

type User = {
    name: string;
    role: string;
};

export const UserContext = createContext<User | null>(null);
