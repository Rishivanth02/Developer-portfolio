import React from "react";
import style from "../contentLeft/contentLeft.module.scss";
import DevImage from "../../assets/png/developer-img.png";
import MailIcon from "../../assets/svg/mail.svg";
import LinkedIn from "../../assets/svg/linkedin.svg"
import Doodle01 from "../../assets/svg/doodle05.svg"
import Doodle02 from "../../assets/svg/doodle02.svg"
import Doodle03 from "../../assets/svg/doodle04.svg"

function ContentLeft() {
  return (
    <>
      <section className={`${style["name-card-wrapper"]}`}>
        <div className={`${style["name-card"]}`}>
          <span className={`${style["card-image"]}`}>
            <img src={DevImage} alt="developer-image" />
          </span>

          <h2 className={`${style["card-dev-name"]}`}>RISHIVANTH</h2>
          <span className={`${style["doodle-one"]}`}>
            <img src={Doodle01} alt="" />
          </span>
          <span className={`${style["doodle-two"]}`}>
            <img src={Doodle02} alt="" />
          </span>
          <span className={`${style["doodle-three"]}`}>
            <img src={Doodle03} alt="" />
          </span>
        <div className={`${style["card-decs-wrapper"]}`}>
          <h5 className={`${style["card-decs"]}`}>    
          A UI Developer crafting seamless and responsive user interfaces to
          enhance user experiences
            </h5>  
        </div>

        <div className={`${style["media-icons-wrapper"]}`}>
        <span>
            <img src={LinkedIn} alt="LinkedIn" />
        </span>
        <span>
            <img src={MailIcon} alt="mail" />
        </span>
        </div>
        </div>

      </section>
    </>
  );
}

export default ContentLeft;
