"use client"
import React, { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);//true->dark theme, false->light theme

    const toggleTheme = () => {
        setTheme((previous) => {
            if (window !== undefined) {
                document.body.className=!previous?"dark-theme":"light-theme"
            }
            return !previous
        });
    }

    useEffect(() => {
         if (window !== undefined) {
             document.body.className = "dark-theme";
            }
    },[])
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};


export const useTheme=()=>useContext(ThemeContext)