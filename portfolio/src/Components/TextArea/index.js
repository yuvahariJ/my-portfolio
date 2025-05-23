
"use client"

import React, { useState } from 'react'
import "./index.css";

const TextArea = ({ placeholder,name }) => {
  const [value, setValue] = useState("");
  return (
    <div className={`input-container`}>
      <textarea
        className={`text-area-style`}
        onChange={(e) => setValue(e.target.value)} name={name} placeholder={placeholder}>

      </textarea>
    </div>
  )
}

export default TextArea;