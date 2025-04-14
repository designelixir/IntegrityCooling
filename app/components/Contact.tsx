"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="flex-center-center basic-padding contact-image" id="ContactSection" style={{ padding: '100px 0'}} >
      <div className="contact-form-wrapper">
        <h2 style={{margin: '0', padding: '0'}}>Contact Us</h2>
        <p style={{marginBottom: '25px'}}>Fill out the form below with any questions, comments or inquiries.</p>

        <form 
          action="https://formspree.io/f/xnnprpqk" 
          method="POST" 
          className="contact-form flex-start-start flex-column"
          onSubmit={() => setSubmitted(true)}
        >
          <label className="flex-start-start flex-column">
            Name:
            <input type="text" name="name" required />
          </label>

          <label className="flex-start-start flex-column">
            Email:
            <input type="email" name="email" required />
          </label>

          <label className="flex-start-start flex-column">
            Message:
            <textarea name="message" rows={4} required />
          </label>

          <button type="submit" style={{width: '100%'}} className="white-text button-1">Send</button>

          {submitted && <p className="success-msg">Thank you! Your message has been sent.</p>}
        </form>
      </div>
    </section>
  );
}
