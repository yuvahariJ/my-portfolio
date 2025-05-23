"use client"

import React, { useState } from "react";
import "./index.css";
import InformationCard from "../../Components/InformationCard";
import pageData from "./resumeData.json";
import { useTheme } from "@/Context/ThemeProvider/Theme";
import IconCard from "../../Components/IconCard";
import ValuePairCard from "../../Components/ValuePairCard";

const Resume = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className={`resume-page-content-wrapper`}>
        <div
          className={`navbar-title-container ${
            theme
              ? `navbar-title-container-dark`
              : `navbar-title-container-light`
          }`}
        >
          {pageData.resumeContent.map((resumeItem, index) => {
            return (
              <>
                <div
                  onClick={() => setActiveTab(index)}
                  className={` navbar-title ${
                    theme ? "navbar-title-dark" : "navbar-title-light"
                  } ${activeTab === index ? "active-tab" : ""}`}
                >
                  {resumeItem.navTitle}
                </div>
              </>
            );
          })}
        </div>
        <div className={`resume-content-wrapper`}>
          <h1>{pageData?.resumeContent[activeTab]?.title}</h1>
          <span className={`${theme ? "description-dark" : "description-light"}`}>
            {pageData?.resumeContent[activeTab]?.description}
          </span>
          <div className={`resume-cards-container`}>
            {pageData?.resumeContent[activeTab]?.cards?.map((cards,index) => {
              return (
                <InformationCard
                  year={cards.year}
                  title={cards.title}
                  location={cards.location}
                  key={index}
                />
              );
            })}
          </div>
          <div className={`resume-icon-container`}>
            {pageData?.resumeContent[activeTab]?.iconCard?.map((iconCards,index) => {
              return (
                <IconCard title={iconCards?.title} icon={iconCards?.icon} key={index} />
              );
            })}
          </div>
          <div className="resume-about-section">
            {pageData?.resumeContent[activeTab]?.listItems?.map((info) => {
              return (
                <>
                  <ValuePairCard
                    label={info?.label}
                    value={info?.value}
                  />
                </>
                
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;