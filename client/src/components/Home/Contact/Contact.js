import React from "react";
import logo from '../../../assets/logo.png'
import { useFormik } from 'formik'
import * as yup from 'yup'
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

  const formSchema = yup.object().shape({
    full_name: yup.string().required("Full name required"),
    email: yup.string().email("Invalid email").required("Email required"),
    message: yup.string().required("Message required"),
  });

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      message: "",
    },
    validationSchema: formSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          // Handle success (e.g., show a success message)
          console.log("Email sent successfully");
        } else {
          // Handle errors (e.g., show an error message)
          console.error("Error sending email");
        }
      } catch (error) {
        // Handle fetch request errors
        console.error("Error sending email:", error);
      }

      // Optionally, reset the form after successful submission
      resetForm();
    },

  });

  return (
    <div className={`Contact ${opacity ? "opacity-0 d-none" : "opacity-1 d-block"}`}>
      <div className="contact-banner"><h1>Contact Us</h1></div>
      <div className={`contact-wrapper ${opacity ? "opacity-0 d-none" : "opacity-1 d-block"}`}>
        <div className="hours">
          <h1>Working Hours</h1>
          <p>Check out our office hours to plan your visit.</p>
          <div className="week">{renderOfficeHours()}</div>
          <h1>Got A Question?</h1>
          <a href="tel:+19095015252"><button>Call now</button></a>
        </div>
        <div className="form-container">
          <h1>Send Us A Message</h1>
          <img src={logo} width="250px" alt="logo" />
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="full_name"
              placeholder="Full Name*"
              onChange={formik.handleChange}
              value={formik.values.full_name}
            />
            {formik.touched.full_name && formik.errors.full_name ? (
              <div className="error">{formik.errors.full_name}</div>
            ) : null}
            <input
              type="email"
              name="email"
              placeholder="Email*"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <textarea
              name="message"
              placeholder="Message*"
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="error">{formik.errors.message}</div>
            ) : null}
            <button type="submit">Submit</button>
          </form>
          {/* <div>
            <p>Whether you prefer the ease of email, a direct conversation at 909-501-5252, or a face-to-face meeting at our office in Riverside CA, at Quirk & Quill, we're dedicated to providing top-notch web solutions and outstanding customer service. Have a question about our services, need a quote for your project, or just want to chat about your web needs? We're here to listen and assist.</p>
            <a href="mailto:chernandez@qqstudios.net">Send Us A Message</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
