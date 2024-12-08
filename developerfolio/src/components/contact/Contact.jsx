import React from "react";
import style from "../contact/contact.module.scss";
import Image from "../../assets/svg/doodle10.svg";

function Contact() {
  return (
    <section className={`${style["contact-wrapper"]}`}>
      <div className={`${style["contact-form-wrapper"]}`}>
        <h2
          className={`${style["skills-content-heading"]} skills-content-heading`}
        >
          Let’s Work{" "}
          <span className={`${style["sub-text"]} sub-text`}> Together!</span>
        </h2>
        <div className={`${style["contact-content-wrapper"]}`}>
          <div className="footer-form">
            <form action="#" method="post">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />

              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />

              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                rows="4"
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
          <span>
            <img className={`${style["Do"]}`} src={Image} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
