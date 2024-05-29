import { Navigate } from "react-router-dom";
import { useContext, ReactNode } from "react";
import { Context } from "../context/AuthContext";

interface ProtectedProps {
    children: ReactNode;
}

export function Protected({ children }: ProtectedProps) {
    const context = useContext(Context);

    if (!context) {
        throw new Error(
            "Protected must be used within an AuthContext provider"
        );
    }

    const { user } = context;

    if (!user) {
        return <Navigate to="/login" replace />;
    } else {
        return children;
    }
}

const ProtectedRoute = ({ children }: ProtectedProps) => {
    const context = useContext(Context);

    if (!context) {
        throw new Error(
            "Protected must be used within an AuthContext provider"
        );
    }

    const { user } = context;

    if (!user) {
        return <Navigate to="/login" replace />;
    } else {
        return children;
    }
};

export default ProtectedRoute;
