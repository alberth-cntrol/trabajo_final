import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


export function Perfil() {
    const { logout, user } = useAuth();

    
    
    return (
        <div>
            <Navbar />
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-white text-dark" style={{ borderradius: '1rem' }}>
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <center><p className="text-xl mb-4">Bienvenido</p></center>
                                    <center><p> {user.displayName || user.email}</p></center>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}