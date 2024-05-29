import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./Pages/Home";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <section className="bg-[#2b2c37] min-h-screen flex items-center flex-col justify-center">
            <AuthContext>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </AuthContext>
        </section>
    );
};

export default App;
