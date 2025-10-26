"use client"

import React from "react";
import "./index.css";
import { FiDownload } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import PageWrapper from "@/Components/PageWrapper";
import Button from "@/Components/Buttons/Button";
import RoundedImage from "@/Components/RoundedImage";
import { useTheme } from "@/Context/ThemeProvider/Theme";

const phoneNumber="917010693951"

export default function Home() {
  const { theme } = useTheme();

  const handleLinkedInClick = () => {
    window.open(`https://linkedin.com/in/yuvahari-j-81985319b `, "_blank");
  };
  const handleGitHubClick = () => {
    window.open(`https://github.com/yuvahariJ `, "_blank");
  };
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  return (
    <PageWrapper>
      <div className={theme ? "dark-theme" : "light-theme"}>
        <div className="content-main">
          <div className="left-profile-section">
            <h3>SoftWare Developer</h3>
            <h1 className="greetings">Hello I'm</h1>
            <h1 className={`name-content ${theme?"heading-dark":"heading-light"}`}>Yuvahari . J</h1>
            <h3>
              Highly motivated software developer with 2.5+ years of experience
              specializing in full-stack development and modern web
              technologies. Proficient in building scalable and maintainable
              applications using React, Next.js, and Java. Skilled in
              integrating advanced tools
            </h3>
            <div className="contact-section-homePage">
              
              <Button label="Download" type="outline" leadingIcon={<FiDownload />} />
              <Button onClick={ handleGitHubClick} leadingIcon={<IoLogoGithub size={20} />} type="icon-button" />
              <Button onClick={handleLinkedInClick} leadingIcon={<RiLinkedinFill size={20} />} type="icon-button" />
              <Button onClick={handleWhatsAppClick} leadingIcon={<FaWhatsapp size={20} />} type="icon-button" />
              
              
            </div>
          </div>
          <div className="right-profile-section">
            <RoundedImage imageSrc="/ImageProfile.jpeg" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
