"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Optionally reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="flex-center-center basic-padding contact-image" id="ContactSection" style={{ padding: '100px 0'}} >

      
      <div className="contact-form-wrapper">
      <h2 className="" style={{margin: '0', padding: '0'}}>Contact Us</h2>
      <p className="" style={{marginBottom: '25px'}}>Fill out the form below with any questions, comments or inquiries. </p>
        <form onSubmit={handleSubmit} className="contact-form flex-start-start flex-column">
          <label className="flex-start-start flex-column">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="flex-start-start flex-column">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="flex-start-start flex-column">
            Message:
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" style={{width: '100%'}} className="white-text button-1">Send</button>

          {submitted && <p className="success-msg">Thank you! Your message has been sent.</p>}
        </form>
      </div>
    
    </section>
  );
}