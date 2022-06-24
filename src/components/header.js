import React from "react";
import logo from "../images/Vector.png"

export default function Header() {
    return (
        <header className="header">
            <img 
            src={logo} 
            alt="meme-img" 
            className="header--img" >

            </img>
            <h2 className="header--title">Meme Generator</h2>
            
        </header>
    )
}