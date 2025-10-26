import React from 'react'
import "./index.css";

const TextArea = ({ placeholder,name,handleChange }) => {
  return (
    <div className={`input-container`}>
      <textarea
        className={`text-area-style`}
        onChange={(e) => handleChange(name, e.target.value)} name={name} placeholder={placeholder}
      >
          
      </textarea>
    </div>
  )
}

export default TextArea;