import React, { useState } from 'react';
import './Contact.css'; 

const ContactForm = () => {
  const [send, setSend] = useState(false); 
  const [showButton, setShowButton] = useState(false); 
  
  const handleSend = () => {
    setSend(true); 
    setShowButton(true); 
  };

  const handleNewMessage = () => {
    setSend(false); 
    setShowButton(false); 
  };

  return (
    <div id='contact-section' className='contact-container'>
      <div className='contact-content'>
        <div className='contact-form'>
          <div className='contact-header'>
            Share your wishes
          </div>
          <div className='contact-inputs'>
            <input type='text' className='input-element' placeholder='Name us' />
            <input type='tel' className='input-element' placeholder='Your number?' />
            <textarea className='input-element' placeholder='Order or share thoughts here' />
          </div>
          <div className='button-container'>
            <button className='send-button' onClick={handleSend}>Send it</button>
            {showButton && (
              <button className='new-message-button' onClick={handleNewMessage}>
                New message
              </button>
            )}
          </div>
          {send && (
            <div className='thank-you-message'>
              Thanks! We've got it. 💪💪 We'll get back to you soon. 🏃‍♂️
            </div>
          )}
        </div>
        <div className='contact-image'>
          <img src="./assets/contact-image.jpg" alt='Contact' />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
