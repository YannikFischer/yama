import React from 'react'
import { useRef } from 'react';
import "./HeroSection.scss"
import HeroImage from "../../images/HeroImage.png"

const HeroSection = () => {
    const heroRef = useRef(null);

    const handleClick = () => {
        heroRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <div className="HeroMain" style={{ backgroundImage: `url(${HeroImage})` }}>
                <button onClick={handleClick} className='HeroButton'>SHOP NOW</button>
            </div>
            <div ref={heroRef} className="HeroInfos">
                <div className="HeroInfo">Versand innerhalb von 48 Stunden</div>
                <div className="HeroInfo">Gratis Versand ab 49€</div>
                <div className="HeroInfo">Lieferung innerhalb von Österreich, Deutschland und Schweiz</div>
            </div>
        </>
    )
}

export default HeroSection