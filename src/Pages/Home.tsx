import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Home = () => {
    const handleSignOut = () => {
        signOut(auth)
            .then(() => console.log("Sign Out"))
            .catch((error) => console.log(error));
    };
    return (
        <div>
            <button onClick={handleSignOut} className="text-white">
                Sign Out
            </button>
            <h1 className="text5xl">Hello</h1>
        </div>
    );
};

export default Home;
