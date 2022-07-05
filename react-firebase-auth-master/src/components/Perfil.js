import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export function Perfil() {
    const { logout, user } = useAuth();

    console.log(user);
    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <div>
            <Navbar />
            <div className="w-full max-w-xs m-auto text-black">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <center><p className="text-xl mb-4">Bienvenido</p></center>
                    <center><p> {user.displayName || user.email}</p></center>
                    <br></br>

                </div>


            </div>

        </div>
    )
}