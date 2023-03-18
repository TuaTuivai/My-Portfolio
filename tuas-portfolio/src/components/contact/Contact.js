import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError('');
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setNameError('Name is required');
    }
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
    }
    if (name && email) {
      // Handle form submission here
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // Reset form values
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          {nameError && <span>{nameError}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <span>{emailError}</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
