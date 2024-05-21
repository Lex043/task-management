import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
    return (
        <section className="bg-[#2b2c37] min-h-screen flex items-center flex-col justify-center">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </section>
    );
};

export default App;
