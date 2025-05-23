import React from "react";
import "./index.css";


const ToggleButton = ({...props}) => {
    const { onChange } = props;
    return (
        <>
            <div className="container">
                <input className={`visually-hidden`} type="checkbox" id="checkButton" onChange={onChange} />
                <label htmlFor="checkButton" className="button"></label>
            </div>
        </>
    
    );
};

export default ToggleButton;