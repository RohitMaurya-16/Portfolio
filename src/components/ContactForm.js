import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // WhatsApp Integration
      const whatsappNumber = "919026888758";
      const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
      window.open(whatsappUrl, '_blank');

      // EmailJS Integration
      const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
      const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
      const userID = 'YOUR_USER_ID'; // Replace with your EmailJS User ID (Public Key)

      emailjs.send(serviceID, templateID, formData, userID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSubmitted(true);
        }, (err) => {
          console.log('FAILED...', err);
          alert('Failed to send email. Please try again later.');
        });
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="text-gray-800 dark:text-gray-200">
              <h2 className="text-3xl font-bold mb-4 text-primary dark:text-primary-light">Contact Information</h2>
              <p className="mb-6">
                Hi, I'm Rohit Maurya, a passionate B.Tech CSE (AI & ML) student with a strong interest in AI-powered projects, software development, and real-world innovation. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaUser className="text-primary dark:text-primary-light mr-3" />
                  <span>Rohit Maurya</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-primary dark:text-primary-light mr-3" />
                  <span>+91-9026888758</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-primary dark:text-primary-light mr-3" />
                  <span>rohitmaurya1604@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-green-500">Thank you!</h3>
                  <p className="text-gray-600 dark:text-gray-400">Your message has been sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-colors"
                  >
                    <FaPaperPlane className="mr-2" /> Send
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
