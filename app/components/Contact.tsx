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

      <button type="submit">Send</button>

      {submitted && <p className="success-msg">Thank you! Your message has been sent.</p>}
    </form>
  );
}