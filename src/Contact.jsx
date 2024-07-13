import React, { useState } from 'react';
import './Contact.css'; 

const ContactForm = () => {
  const [send, setSend] = useState(false); 

  const handleSend = (e) => {
    e.preventDefault(); 
    setSend(true); 
  };

  const handleChange = () => {
    setSend(false);
  };

  return (
    <div id='contact-section' className='contact-container'>
      <div className='contact-content'>
        <form className='contact-form' onSubmit={handleSend}>
          <div className='contact-header'>
            Share your wishes
          </div>
          <div className='contact-inputs'>
            <input 
              type='text' 
              className='input-element' 
              placeholder='Name us' 
              required 
              onChange={handleChange}
            />
            <input 
              type='tel' 
              className='input-element' 
              placeholder='Your number?' 
              pattern='[0-9]*' 
              inputMode='numeric' 
              onChange={handleChange}
            />
            <textarea 
              className='input-element' 
              placeholder='Order or share thoughts here' 
              required 
              onChange={handleChange}
            />
          </div>
          <div className='button-container'>
            <button type='submit' className='send-button'>Send it</button>
          </div>
          {send && (
            <div className='thank-you-message'>
              Thanks! We've got it. 💪💪 We'll get back to you soon. 🏃‍♂️
            </div>
          )}
        </form>
        <div className='contact-image'>
          <img src="./assets/contact-image.jpg" alt='Contact' />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
