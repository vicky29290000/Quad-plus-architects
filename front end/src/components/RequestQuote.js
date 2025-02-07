// /frontend/src/components/RequestQuote.js

import React, { useState } from 'react';

function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle quote request submission (e.g., make an API call)
    console.log(formData);
  };

  return (
    <section className="quote-section">
      <h2>Request a Quote</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="details"
          placeholder="Project Details"
          value={formData.details}
          onChange={handleChange}
          required
        />
        <button type="submit">Request Quote</button>
      </form>
    </section>
  );
}

export default RequestQuote;
