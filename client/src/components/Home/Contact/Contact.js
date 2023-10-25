import React from "react";
import logo from '../../../assets/logo.png'
import "./styles.css";

function Contact({ opacity }) {
  const officeHours = [
    { day: "Monday", hours: "8:00AM - 5:00PM" },
    { day: "Tuesday", hours: "8:00AM - 5:00PM" },
    { day: "Wednesday", hours: "8:00AM - 5:00PM" },
    { day: "Thursday", hours: "8:00AM - 5:00PM" },
    { day: "Friday", hours: "8:00AM - 5:00PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ];

  const renderOfficeHours = () => {
    return officeHours.map((info) => (
      <div className="day" key={info.day}>
        <span>{info.day}:</span>
        <span>{info.hours}</span>
      </div>
    ));
  };

  const handleButtonClick = () => {
    // Define the behavior when the button is clicked
    // For example, trigger an action or show a code
  };

  return (
    <div className={`Contact ${opacity ? "opacity-0 d-none" : "opacity-1 d-block"}`}>
      <div className="contact-banner"></div>
      <div className={`contact-wrapper ${opacity ? "opacity-0 d-none" : "opacity-1 d-block"}`}>
        <div className="hours">
          <h1>Working Hours</h1>
          <p>Check out our office hours to plan your visit.</p>
          <div className="week">{renderOfficeHours()}</div>
          <h1>Give Us A Call</h1>
          <button onClick={handleButtonClick}>Call now</button>
        </div>
        <div className="form-container">
          <h1>Give Us A Call</h1>
          <img src={logo} width="250px" alt="logo" />
          <form>
            <input type="text" name="full-name" placeholder="Full Name*" />
            <input type="email" name="email" placeholder="Email*" />
            <textarea name="message" placeholder="Message*"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
