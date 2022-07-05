import React, { useState, useSyncExternalStore } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Container, LogoContainer, Menu, MenuIten, MenuItenLink, MobileIcon, Wrapper } from "./NavbarElements";
import { FaAtlassian, FaBars, FaTimes, FaHome, FaUserAlt, FaBriefcase, FaGlasses, } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
    const [showMobileMenu, setshowMobileMenu] = useState(false)
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
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoContainer>
                        <FaAtlassian />
                        <p>
                            Digital
                        </p>
                        <p>
                            locked
                        </p>
                    </LogoContainer>
                    <MobileIcon onClick={() => setshowMobileMenu(!showMobileMenu)}>
                        <FaBars />
                    </MobileIcon>
                    <Menu open={showMobileMenu}>
                        <Link to="/" style={{ textDecoration: 'none', color: '#64b2ff' }}  >
                            <MenuIten>
                                <MenuItenLink>
                                    <div>
                                        <FaHome />
                                        Home
                                    </div>
                                </MenuItenLink>
                            </MenuIten>
                        </Link>
                        <Link to="/perfil" style={{ textDecoration: 'none', color: '#64b2ff' }}  >
                            <MenuIten>
                                <MenuItenLink>
                                    <div>
                                        <FaUserAlt />
                                        Perfil
                                    </div>

                                </MenuItenLink>

                            </MenuIten>
                        </Link>

                        <MenuIten>
                            <Link to="/mostrar" style={{ textDecoration: 'none', color: '#64b2ff' }} onClick="location.reload()">
                                <MenuItenLink>
                                    <div>
                                        <FaBriefcase />
                                        Registro de reconocimiento
                                    </div>
                                </MenuItenLink>
                            </Link>
                        </MenuIten>
                        <MenuIten>
                        <Link to="/login" style={{ textDecoration: 'none', color: '#64b2ff' }} onClick={handleLogout}>
                            <MenuItenLink >
                                <div>
                                    <FaGlasses />
                                    Cerrar sesion

                                </div>
                            </MenuItenLink>
                        </Link>
                        </MenuIten>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}
export default Navbar