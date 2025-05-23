"use client"
import React from "react";
import "./index.css";
import { useTheme } from "@/Context/ThemeProvider/Theme";

const Button = ({ ...props }) => {
  const { theme } = useTheme();
  const { label, onClick, type, leadingIcon, style } = props;
  const getButtonType = () => {
    switch (type) {
      case "outline":
        if (theme) return "outline-black";
        return "outline";
      case "icon-button":
        if (theme) return "icon-button  icon-button-dark";
        return "icon-button  icon-button-light";
      default:
        return "button-main";
    }
  };
  return (
    <button
      {...(onClick && {
        onClick: () => onClick(),
      })}
      className={`button-default ${getButtonType()}`}
      {...style}
    >
      {label}
      {leadingIcon}
    </button>
  );
};

export default Button;
