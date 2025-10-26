"use client"


import React from "react";
import "./index.css";
// import "../../App.css"
import ToggleButton from "../../Components/Buttons/ToggleButton";
import { useTheme } from "@/Context/ThemeProvider/Theme";
import Button from "../../Components/Buttons/Button";
import Link from "../../Components/Links";

const Header = () => {
    const {toggleTheme}=useTheme()
    return (
        <>
            <div className="header-main-div">
                <div className="left-section primary-heading-h1">
                    {/* <h1>Yuvahari <span className="period-style"
                    >.</span> J</h1> */}
                    
                </div>
                <div className="right-section">
                    <div className="link-section">
                        <div className="links-style">
                             <Link label="Home" href="/" />
                        <Link label="Resume" href="/resume" />
                        <Link label="Work" href="/work"/>
                        <Link label="Contact" href="/contact" />
                        </div>
                        <div className="buttons-style">
                            {/* <Button label="Hire Me" /> */}
                        {/* <ToggleButton onChange={ ()=>toggleTheme()} /> */}
                        </div>
                       
                        
                    </div>
                    
                </div>
                
                </div>
        </>
    )    
}

export default Header;

