import React from 'react';
import HomeIcon from "../../assets/svg/home.svg"
import FolderIcon from "../../assets/svg/folder.svg"
import Briefcase from "../../assets/svg/briefcase.svg"
import SkillIcon from "../../assets/svg/tool.svg"
import style from "../header/header.module.scss";


const Header = () => {
    return (
        <section className={`${style["header-wrapper"]}`}>
        <div className={`${style["header-icons-wrapper"]}`}>
           <span className={`${style["header-icons"]}`}>
            <img src={HomeIcon} alt="home-icon" />
           </span>
           <span className={`${style["header-icons"]}`}>
            <img src={FolderIcon} alt="folder-icon" />
           </span>
           <span className={`${style["header-icons"]}`}>
            <img src={Briefcase} alt="home-icon" />
           </span>
           <span className={`${style["header-icons"]}`}>
            <img src={SkillIcon} alt="home-icon" />
           </span>
           <span className={`${style["header-icons"]}`}>
            <img src={HomeIcon} alt="home-icon" />
           </span>
        </div>
        </section>
    );
}

export default Header;
