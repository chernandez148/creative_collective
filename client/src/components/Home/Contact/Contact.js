import React from "react";
import logo from "../../../assets/logo.png";
import "./styles.css";

function Contact({ opacity }) {
  const hour = [
    { day: "Monday", hours: "8:00AM - 5:00PM" },
    { day: "Tuesday", hours: "8:00AM - 5:00PM" },
    { day: "Wednesday", hours: "8:00AM - 5:00PM" },
    { day: "Thursday", hours: "8:00AM - 5:00PM" },
    { day: "Friday", hours: "8:00AM - 5:00PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div
      className={`Contact ${
        opacity ? "opacity-0 d-none" : "opacity-1 d-initial"
      }`}
    >
      <div
        className={`contact-wrapper ${
          opacity ? "opacity-0 d-none" : "opacity-1 d-initial"
        }`}
      >
        <div className="contact-banner"></div>
        <div className="contact-info info">
          <div className="hours">
            <h1>Hours</h1>
            <p style={{ marginBottom: "1rem" }}>
              Checkout our hours to plan your call.
            </p>
            {hour.map((info, index) => (
              <div key={index} className="day">
                <p>{info.day}</p>
                <p>{info.hours}</p>
              </div>
            ))}
            <h2>Any Questions?</h2>
            <button>Call Now</button>
          </div>
          <div className="contact-form">
            <h2>Contact Us For A Free Quote</h2>
            <div className="form-wrapper">
              <div className="form-image">
                <img src={logo} alt="logo" width="300px" />
              </div>
              <form>
                <input type="text" placeholder="Full Name*" />
                <input type="email" placeholder="Email*" />
                <textarea
                  placeholder="Enter Your Message Here*"
                  row="30"
                ></textarea>
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
