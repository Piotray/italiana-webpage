import React, { useState } from 'react';
import './Contact.css'; 

const ContactForm = () => {
  const [send, setSend] = useState(false); 
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSend = () => {
    setSend(true);
    setFormData({
      name: '',
      number: '',
      message: ''
    });
  };

  return (
    <div id='contact-section' className='contact-container'>
      <div className='contact-content'>
        <div className='contact-form'>
          <div className='contact-header'>
            Share your wishes
          </div>
          <div className='contact-inputs'>
            <input
              type='text'
              name='name'
              className='input-element'
              placeholder='Name us'
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type='tel'
              name='number'
              className='input-element'
              placeholder='Your number?'
              value={formData.number}
              onChange={handleInputChange}
            />
            <textarea
              name='message'
              className='input-element'
              placeholder='Order or share thoughts here'
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className='button-container'>
            <button className='send-button' onClick={handleSend}>Send it</button>
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
