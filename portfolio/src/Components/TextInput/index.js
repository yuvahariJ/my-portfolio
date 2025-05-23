"use client"

import React, { useEffect } from "react";
import "./index.css"; 

const TextInput = ({ label, placeholder, type }) => {
  useEffect(() => {
    window.addEventListener("wheel", (event) => {
      if (document.activeElement.type === "number") {
        event.preventDefault()
      }
    }, { passive: false })
    
    return () => {
      window.removeEventListener("wheel", (event) => {
        if (document.activeElement.type === "number") {
          event.preventDefault()
        }
      })
    }
  })
  return (
    <div className="input-container">
      <div>
      {label && <label  className="input-label">{label}</label>}
        <input type={type} className="input-style" placeholder={placeholder} />
        </div>
    </div>
  );
};

export default TextInput;
