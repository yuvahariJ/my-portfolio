"use client"
import React, { createContext, useContext, useState } from "react";


const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);//true->dark theme, false->light theme

    const toggleTheme = () => {
        setTheme((previous) => !previous);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};


export const useTheme=()=>useContext(ThemeContext)