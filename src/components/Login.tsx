import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate();
    const [details, setDetails] = useState({ email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const submitDetails = (e: React.FormEvent) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, details.email, details.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User signed in:", user);
                toast.success("Success", {
                    position: "top-right",
                    style: {
                        background: "#000",
                        color: "#FFF",
                    },
                });
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                toast.error(`${errorMessage}`, {
                    position: "top-right",
                    style: {
                        background: "#000",
                        color: "#FFF",
                    },
                });
            });

        setDetails({ email: "", password: "" });
    };

    return (
        <section className="p-[40px] w-full max-w-[30rem] font-mono">
            <h1 className="text-5xl text-white font-bold my-6">Kanban</h1>

            <div className="text-white">
                <h2 className="text-2xl my-2 font-semibold">Login</h2>
                <p>Enter your details below to access your account</p>
                <form action="submit" onSubmit={submitDetails}>
                    <div className="mt-5">
                        <label className="text-sm">Email address</label>

                        <input
                            className="border rounded-[4px] py-2 w-full bg-inherit pl-3 outline-none"
                            name="email"
                            type="email"
                            value={details.email}
                            onChange={handleChange}
                            placeholder="name@gmail.com"
                        />
                    </div>
                    <div className="mt-5">
                        <label className="text-sm">Password</label>

                        <input
                            className="border rounded-[4px] py-2 w-full bg-inherit pl-3 outline-none"
                            name="password"
                            type="password"
                            value={details.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button className="bg-[#635fc7] text-white w-full rounded-[4px] py-3 my-7">
                        Login
                    </button>
                    <p className="text-xs">
                        Not a member? <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Login;
