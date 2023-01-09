import React from "react";
import "./Contact.css";
import undrawSVG from "./undraw_mobile_messages_re_yx8w.svg";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-sous-container">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-paragraph">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <div className="image-form-wrapper">
          <img src={undrawSVG} alt="undrawsvg" className="contact-image" />
          <form className="contact-form">
            <input className="form-item" type="text" placeholder="Name" />

            <input className="form-item" type="text" placeholder="Email" />

            <input className="form-item" type="text" placeholder="Subject" />

            <textarea
              placeholder="Your Message"
              rows="4"
              cols="50"
              className="form-text-area-item"
            ></textarea>
            <div className="form-action">
              <button className="contact-form-submit-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
