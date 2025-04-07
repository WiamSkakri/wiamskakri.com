import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <Mail className="text-gray-400" size={24} />
        <h1 className="text-3xl">Contact</h1>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;