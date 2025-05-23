"use client"

import React from "react";
import "./index.css"
import { useTheme } from "@/Context/ThemeProvider/Theme";
import Link from "next/link";

const LinkTo = ({ ...props }) => {
    const { href, label } = props;
    const {theme}=useTheme()
    return (
        <Link className={`link-style ${theme?"dark-theme":"light-theme"} `}
            href={href}>
            {label}
        </Link>
    )
};

export default LinkTo;