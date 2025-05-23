"use client"

import React, { useRef, useState } from "react";
import "./index.css";
import { AiOutlineCaretUp } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";

const DropDown = ({ label, options, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef();
  return (
    <div className={`input-container `}>
      <div
        className={`select-div ${!selectedValue?`select-placeholder`:""} ${showOptions?"input-container-outline":""}`}
        onClick={() => setShowOptions(!showOptions)}
        ref={ref}
      >
        {!selectedValue && placeholder}
        {selectedValue}
        <div>{!showOptions ? <AiOutlineCaretDown className={`caret-icon-color`} /> : <AiOutlineCaretUp className={`caret-icon-color`} />}</div>
      </div>
      <div className={`select-option-warpper ${showOptions?"":"select-option-hide"}`} style={{width:ref?.current?.offsetWidth}}>
        {showOptions && (
          <>
            {options?.map((option,index) => {
              return (
                <div
                  onClick={() => {
                    setSelectedValue(option?.description);
                    setShowOptions(false);
                  }}
                  className={`options-dropdown-style`}
                  value={option?.value}
                  key={index}
                >
                  {option?.description}
                </div>
              );
            })}
          </>
        )}
      </div>
      
    </div>
  );
};

export default DropDown;
