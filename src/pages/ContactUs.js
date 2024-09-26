import React, { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Basic validation
      if (!validateEmail(formData.email)) {
        setErrors({ email: 'Invalid email address' });
        return;
      } else {
        setErrors({});
      }
  
      // try {
      //   const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/send-email`, {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(formData),
      //   });
      //   if (response.ok) {
      //     setSuccessMessage('Your message has been sent successfully!');
      //     setFormData({ name: '', email: '', message: '' });
      //   } else {
      //     throw new Error('Failed to send email');
      //   }
      // } catch (error) {
      //   console.error('Error sending email:', error);
      //   setSuccessMessage('Failed to send your message. Please try again later.');
      // }
    };
  
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="max-w-lg w-full bg-white shadow-md rounded p-8">
                <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
                <form action="https://formsubmit.co/edward.an03@email.com" method="POST" className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="text-center">
                    <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                    >
                    Submit
                    </button>
                </div>
                {successMessage && (
                    <div className="mt-4 text-center text-green-500">
                        {successMessage}
                    </div>
                )}
                </form>
            </div>
        </div>
    </>
  );
}