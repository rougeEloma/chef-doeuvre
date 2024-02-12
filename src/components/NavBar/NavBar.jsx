import React, { useEffect, useState } from "react";
import "./nav-bar.css";
import { MainButton } from "../button/Buttons";
import { Link, useLocation } from "react-router-dom";
import userPfp from "../../../public/img/react.svg"

const NavBar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const {pathname} = useLocation();

    const isActive = () => {
        window,scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return () => {
            window.removeEventListener('scroll', isActive);
        }
    },[])

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true
    }

    return (
        <nav className="nav-bar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="text-links">LBN</span>
                    </Link>
                    {/* <span className="dot">.</span> */}
                </div>
                <div className="main-menu">
                    <span>business</span>
                    <span>Explorer</span>
                    <span>à propos</span>
                    <span>Nos prestataires</span>
                    {!currentUser && <MainButton textValue="Rejoins-nous!"/>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src={userPfp} alt="user profile picture" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {
                                currentUser?.isSeller && (
                                    <>
                                        <Link to="/mes-services"><span>Mes services</span></Link>
                                        <Link to="/ajouter-service"><span>Ajouter service</span></Link>
                                    </>
                                )}
                                <Link to="/mes-achats"><span>Mes achats</span></Link>
                                <Link to="/messages"><span>Messages</span></Link>
                                <Link to="/"><span>Se déconnecter</span></Link>
                            </div>}
                        </div>
                    )}
                </div> 
            </div>
                {/* <hr /> */}
                <div className={(active || pathname =="/") ? "sub-menu active" : "sub-menu"}>
                    <span>Categorie 1</span>
                    <span>Categorie 2</span>
                    <span>Categorie 3</span>
                </div>
        </nav>
    )
}

export default NavBar;