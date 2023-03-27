import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e62i5fp', 'template_86oy6u7', e.target, 'zeJHhFd4y9oXRa1tA')
      .then((result) => {
        console.log(result.text);
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div className='card'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
