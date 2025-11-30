import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    try {
      // Simulate async submit (replace with real API endpoint)
      await new Promise((res) => setTimeout(res, 800));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h2>
      <form className="space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
        <label className="block">
          <span className="sr-only">Your Name</span>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
            aria-label="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            minLength={2}
          />
        </label>
        <label className="block">
          <span className="sr-only">Your Email</span>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg"
            aria-label="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block">
          <span className="sr-only">Your Message</span>
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg h-32"
            aria-label="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            minLength={10}
          ></textarea>
        </label>
        <button className="btn-green disabled:opacity-50" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
        <div aria-live="polite" className="text-sm h-6">
          {status === 'success' && <span className="text-green-600">Message sent successfully!</span>}
          {status === 'error' && <span className="text-red-600">Failed to send. Try again.</span>}
        </div>
      </form>
      <p className="mt-4 text-sm text-gray-600">Email: donate@orphanshope.com</p>
    </div>
  );
}
