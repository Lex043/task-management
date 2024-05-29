import { createContext, useState, useEffect, ReactNode } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

interface AuthContextProps {
    children: ReactNode;
}

interface AuthContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const Context = createContext<AuthContextType | undefined>(undefined);

export function AuthContext({ children }: AuthContextProps) {
    const auth = getAuth();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
        });

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, [auth]);

    const values: AuthContextType = {
        user: user,
        setUser: setUser,
    };

    return (
        <Context.Provider value={values}>
            {!loading && children}
        </Context.Provider>
    );
}
