"use client"


import React from "react";
import { useTheme } from "@/Context/ThemeProvider/Theme";
import PageWrapper from "../../Components/PageWrapper";
import "./index.css";
import RoundedImage from "../../Components/RoundedImage";
import Button from "../../Components/Buttons/Button";
import { FiDownload } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import Profile from "./ImageProfile.jpeg"



const Home = () => {
  const { theme } = useTheme();
  return (
    <PageWrapper>
      <div className={theme ? "dark-theme" : "light-theme"}>
        <div className="content-main">
          <div className="left-profile-section">
            <h3>SoftWare Developer</h3>
            <h1 className="greetings">Hello I'm</h1>
            <h1 className={`name-content ${theme?"heading-dark":"heading-light"}`}>Yuvahari . J</h1>
            <h3>
              Highly motivated software developer with 1.5+ years of experience
              specializing in full-stack development and modern web
              technologies. Proficient in building scalable and maintainable
              applications using React, Next.js, and Java. Skilled in
              integrating advanced tools
            </h3>
            <div className="contact-section-homePage">
              
              <Button label="Download" type="outline" leadingIcon={<FiDownload />} />
              <Button leadingIcon={<IoLogoGithub size={20} />} type="icon-button" />
              <Button leadingIcon={<RiLinkedinFill size={20} />} type="icon-button" />
              <Button leadingIcon={<FaWhatsapp size={20} />} type="icon-button" />
              
              
            </div>
          </div>
          <div className="right-profile-section">
            <RoundedImage imageSrc={Profile} />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
