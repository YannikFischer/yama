import React from 'react'
import "./Navbar.scss"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoTransparent from "../../images/YamaLogoTransparent.png"

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <img src={LogoTransparent} />
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/zubehör">Zubehör</a>
                <a href="/hifi&Audio">Hifi & Audio</a>
                <a href="/smartphones">Smartphones</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar