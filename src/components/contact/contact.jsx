import './contact.css';
import React, { useState } from "react";
import Spline from '@splinetool/react-spline';
// import Spline from '@splinetool/react-spline/next';



export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault(); // prevent redirect

  if (validate()) { // run your validation first
    try {
      const response = await fetch("https://formspree.io/f/xnnzrbyg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    }
  }
};



  return (

    <section className="contact">

      <h2>Contact Me</h2>

      <div className='input-form'>

        <form
          action="https://formspree.io/f/xnnzrbyg" 
          method="POST"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label>Email</label>
            <input
              // type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit">Send</button>
        </form>

        {/* <div className = 'threed'>
          <Spline
            scene="https://prod.spline.design/f8jbXbWHeiEyWWnC/scene.splinecode" 
          />
        </div> */}

      </div>
      

    </section>
  );
}
