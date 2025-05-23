import React from "react";
import "./index.css";
import DynamicForm from "../../Components/DynamicForm";
import ConatactInfo from "./Contact.json";
import { IconsMap } from "../../Components/icons"; 

const CONTACT_FROM = {
  formField: [
    {
      fields: [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
        },
        {
          name: "lastName",
          label: "Last Name",
          type: "text",
        },
      ],
    },
    {
      fields: [
        {
          name: "email",
          label: "Email",
          type: "email",
        },
        {
          name: "phone",
          label: "Phone",
          type: "number",
        },
      ],
    },
    {
        fields: [
            {
                name: "Select a Service",
                type: "dropDown",
                options: [
                    {
                        description: "select a service",
                        value:"default"
                    },
                    {
                        description: "web development",
                       value:"web-dev" 
                    },
                    {
                        description: "back end developer",
                        value:"back-dev"
                    }
                ],
                placeholder: "Select a Option",
                
         }
     ]   
    }, {
      fields: [
        {
          name: "comments",
          placeholder: "Type your message here...",
          type:"textArea",
        }
      ]
    }, {
      fields: [{
        label: "Send Message",
        type:"button"
      }]
    }
  ],
  heading: "Let's Work Together",
};
const Contact = () => {
  return (
    <div className={`contact-page-wrapper`}>
      <div className={'form-conatiner-wrapper'}>
      <DynamicForm
        heading={CONTACT_FROM?.heading}
        formFields={CONTACT_FROM?.formField}
      />
      </div>
      

      <div className={`contact-info-section`}>
        {ConatactInfo.contactInfo.map((info) => {
          const Icon = IconsMap[info?.icon];
          return (
            <>
              <div className={`contact-info-section-card`}>
                <div className={`conatact-icon-box`}>
                  <Icon
                    size={20}
                    className={`info-icon-color`}
                  />
                   
                </div>
                {info?.value}
              </div>
             
              
            </>
           
          )
        })}
      </div>
    </div>
  );
};

export default Contact;
