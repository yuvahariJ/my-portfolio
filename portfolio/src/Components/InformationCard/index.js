"use client"

import React from "react";
import "./index.css";
import { useTheme } from "@/Context/ThemeProvider/Theme";

const InformationCard = (props) => {
  const { theme } = useTheme();
  const { year, title, location } = props;
  return (
    <div
      className={`information-card-wrapper ${
        theme ? "" : "information-card-wrapper-light"
      }`}
    >
      <div
        className={`information-year ${
          theme ? "heading-dark" : "heading-light"
        }`}
      >
        <h5>{year}</h5>
      </div>
      <div className="information-title">
        <h4>{title}</h4>
      </div>
      <div className="information-location">
        <p className="info-wrapper">
          <span className={theme ? "heading-dark" : "heading-light"}>.</span>{" "}
          {location}
        </p>
      </div>
    </div>
  );
};

export default InformationCard;
