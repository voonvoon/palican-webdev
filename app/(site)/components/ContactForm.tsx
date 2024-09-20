'use client'

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_bassixn', // Email service id
        'template_n8t5pxx', // template id
        formData,
        '2OoCeRgEKpAPTPIRC' // public key
      )
      .then((result) => {
        toast.success('Message sent successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
        });
      })
      .catch((error) => {
        toast.error('Failed to send message, please try again.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
        });
        console.error('Error:', error);
      });

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      content: '',
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="mt-12 font-bold text-gray-700 text-3xl text-center mb-4">Write To Us</h2>
      <form onSubmit={sendEmail} className="bg-white shadow-xl rounded-lg px-8 py-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Message
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Message"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
