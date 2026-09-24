import type React from "react";

import { createContext, type SetStateAction } from "react";

type User = {
    name: string;
    role: string;
}

type UserContextType = {
    user: User | null;
    setUser: React.Dispatch<SetStateAction<User | null>>
}

export const userContext1 = createContext<UserContextType | null>(null);