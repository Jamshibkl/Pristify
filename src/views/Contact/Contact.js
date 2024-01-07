import React from 'react'
import './Contact.css'
import Header from '../../components/Header/Header'
function Contact() {
  return (
        <>
        <Header />
        <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>
   
        <p className="contact-description">
          Have questions or need assistance? Feel free to reach out to us.
        </p>
   
        <form className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name..." />
   
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email..." />
   
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" placeholder="Your message..."></textarea>
   
          <button type="submit">Send Message</button>
        </form>
      </div>
      </>
      

     
  )
}

export default Contact
