import React from "react";
import HomeIcon from "../../assets/svg/home.svg";
import FolderIcon from "../../assets/svg/folder.svg";
import Briefcase from "../../assets/svg/briefcase.svg";
import SkillIcon from "../../assets/svg/tool.svg";
import ContactIcon from "../../assets/svg/contact-icon.svg";
import BulbIcon from "../../assets/svg/bulb-icon.svg";
import Trending from "../../assets/svg/trending-icon.svg";
import style from "../header/header.module.scss";

const Header = () => {

    const navigateToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          window.history.pushState({}, "", `#${sectionId}`);
        }
      };
    

  return (
    <section className={`${style["header-wrapper"]}`}>
      <div className={`${style["header-icons-wrapper"]}`}>
        <span onClick={() => navigateToSection("home")} className={`${style["header-icons"]}`}>
          <img src={HomeIcon} alt="home-icon" />
          <span className={style.tooltip}>Home</span>
        </span>
        <span  onClick={() => navigateToSection("what-i-do")} className={`${style["header-icons"]}`}>
          <img src={FolderIcon} alt="home-icon" />
          <span className={style.tooltip}>What I Do</span>
        </span>
        <span  onClick={() => navigateToSection("skills")} className={`${style["header-icons"]}`}>
          <img src={Briefcase} alt="folder-icon" />
          <span className={style.tooltip}>Skills</span>
        </span>
        <span   onClick={() => navigateToSection("horizons")} className={`${style["header-icons"]}`}>
          <img src={BulbIcon} alt="home-icon" />
          <span className={style.tooltip}>Explore new stacks</span>

        </span>
        <span  onClick={() => navigateToSection("beyond-code")} className={`${style["header-icons"]}`}>
          <img src={Trending} alt="home-icon" />
          <span className={style.tooltip}>Beyond code</span>
        </span>

        <span  onClick={() => navigateToSection("contact")} className={`${style["header-icons"]}`}>
          <img src={ContactIcon} alt="home-icon" />
          <span className={style.tooltip}>Contact</span>
        </span>
      </div>
    </section>
  );
};

export default Header;
