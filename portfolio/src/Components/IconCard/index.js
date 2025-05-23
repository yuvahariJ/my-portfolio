"use client"

import React, { useState } from "react";
import "./index.css";
import { IconsMap } from "../icons";
import { useTheme } from "@/Context/ThemeProvider/Theme";

const IconCard = (props) => {
  const { title, icon, divHover } = props;

  const IconComponent = IconsMap[icon] ?? null;
  const [hover, setHover] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="icon-card-main-wrapper">
      <div>
        <div
          className={`${hover || divHover ? "show-tooltip" : "hide-tooltip"} ${theme?"":"light"}`}
        >
          {hover ? title : ""}
        </div>
      </div>
      <div
        className={`icon-card-wrapper ${theme?"":"icon-card-wrapper-light"}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div>
          <IconComponent
            size={70}
            className={`icon-card-style ${
              theme ? "icon-card-style-dark" : "icon-card-style-light"
            } ${hover ? `${theme?`icon-card-hover`:`icon-card-hover-light`}` : ""}`}
          />
        </div>
        <p className="icon-card-title">{title}</p>
      </div>
    </div>
  );
};

export default IconCard;
