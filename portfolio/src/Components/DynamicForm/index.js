import React from "react";
import TextInput from "../TextInput";
import "./index.css";
import DropDown from "../DropDown";
import TextArea from "../TextArea";
import Button from "../Buttons/Button"; 

const getInputField = (filedDetails) => {
  switch (filedDetails?.type) {
    case "text":
    case "number":
    case "email":
      return (
        <TextInput
          placeholder={filedDetails?.label}
          name={filedDetails?.name}
          type={filedDetails?.type}
        />
      );
    case "dropDown":
      return (
        <DropDown
          label={filedDetails?.label}
          options={filedDetails?.options}
          placeholder={filedDetails?.placeholder}
        />
      )
    case "textArea":
      return (
        <TextArea
         placeholder={filedDetails?.placeholder}
        />
      )
    case "button":
      return (
        <div>
          <Button label={filedDetails?.label} />
          </div>
      )
    default:
      return null;
  }
};
const DynamicForm = (props) => {
  const { formFields ,heading} = props;
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

                return getInputField(field);
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DynamicForm;
