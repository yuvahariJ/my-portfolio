"use client"

import React from "react";
import TextInput from "../TextInput";
import "./index.css";
import DropDown from "../DropDown";
import TextArea from "../TextArea";
import Button from "../Buttons/Button"; 

const getInputField = (filedDetails, handleChange, formData) => {
  switch (filedDetails?.type) {
    case "text":
    case "number":
    case "email":
      return (
        <TextInput
          placeholder={filedDetails?.label}
          name={filedDetails?.name}
          type={filedDetails?.type}
          handleChange={handleChange}
          value={formData[formData]??""}
        />
      );
    case "dropDown":
      return (
        <DropDown
          label={filedDetails?.label}
          options={filedDetails?.options}
          placeholder={filedDetails?.placeholder}
          handleChange={handleChange}
          name={filedDetails?.name}
          value={formData[formData]??""}
        />
      )
    case "textArea":
      return (
        <TextArea
          placeholder={filedDetails?.placeholder}
          handleChange={handleChange}
          name={filedDetails?.name}
          value={formData[formData]??""}
        />
      )
    case "button":
      return (
        <div>
          <Button label={filedDetails?.label} onClick={ filedDetails?.onClick} />
          </div>
      )
    default:
      return null;
  }
};
const DynamicForm = (props) => {
  const { formFields ,heading,handleChange,formData} = props;
  return (
    <div className={`dynamic-form-main-wrapper`}>
      <div className={`dynamic-form-heading-wrapper`}>
        <span className={`dynamic-form-heading`}> {heading}</span>
        
      </div>
      {formFields?.map((fields) => {
        return (
          <>
            <div className={`form-container-wrapper`}>
              {fields?.fields?.map((field) => {

                return getInputField(field,handleChange,formData);
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DynamicForm;
