import React from 'react'
import PizzaLeft from "../asset/pizza_banner.jpg";
import "../Sass/Contact.css";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}>
      </div>
      <div className='rightSide'>
        <h1> Contact Us </h1>

        <form id='contact-form' method='POST'>
          <label htmlFor="name" className='lname'>Full Name</label>
          <input name="name" placeholder='Enter Full Name' type='text'/>
          <label htmlFor="email" className='lemail'>Email</label>
          <input name="email" placeholder='Enter Email' type='email'/>
          <label htmlFor="message" className='lmessage'>Message</label>
          <textarea
            rows="6"
            placeholder='Enter Message'
            name='message'
            required>
          </textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
