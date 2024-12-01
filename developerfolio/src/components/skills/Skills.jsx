import React from "react";
import style from "../skills/skills.module.scss";
import Image from "../../assets/png/what-i-do.png"
import Bolt from "../../assets/svg/bolt-solid.svg"


function Skills() {
  return (
    <>
      <section className={`${style["skills-wrapper"]}`}>
        <div  className={`${style["skills-content"]}`}>
        <h2 className={`${style["skills-content-heading"]}`}>
        What 
            <span className={`${style["sub-text"]}`}> I do</span>
          </h2>
          <div className={`${style["skills-desc-wrapper"]}`}>
           <p className={`${style["skills-desc-text"]}`}>
            PASSIONATE UI DEVELOPER CRAFTING EXCEPTIONAL DIGITAL EXPERIENCES</p> 
              
           <div className={`${style["skills-bullets-points"]}`}>
           <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
            </span>
            <p className={`${style["skills-desc-text"]}`}>
            Design and develop interactive and responsive user interfaces for web and mobile applications.</p> 
           </div>

           <div className={`${style["skills-bullets-points"]}`}>
           <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
            </span>
            <p className={`${style["skills-desc-text"]}`}>
            Create seamless and pixel-perfect designs that ensure a smooth and engaging user experience.</p> 
           </div>

           <div className={`${style["skills-bullets-points"]}`}>
           <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
            </span>
            <p className={`${style["skills-desc-text"]}`}>
            I can handle Figma designs and bring them to life by translating the design into responsive, interactive, and pixel-perfect web pages using code.</p> 
           </div>

           
           <div className={`${style["skills-bullets-points"]}`}>
           <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
            </span>
            <p className={`${style["skills-desc-text"]}`}>
            Optimize performance and accessibility to deliver lightning-fast, user-friendly websites.</p> 
           </div>

           <div className={`${style["skills-bullets-points"]}`}>
           <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
            </span>
            <p className={`${style["skills-desc-text"]}`}>
            Collaborate closely with designers and backend developers for end-to-end project delivery.</p> 
           </div>

           <div className={`${style["skills-bullets-points"]}`}>
           <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
            </span>
            <p className={`${style["skills-desc-text"]}`}>
            Integrate third-party services like Firebase, AWS, or REST APIs to add dynamic functionality.</p> 
           </div>

          </div>
        </div>
        <span>
          <img className={`${style["Do"]}`} src={Image} alt="" />
        </span>
      </section>
    </>
  );
}

export default Skills;
