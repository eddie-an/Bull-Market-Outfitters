import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    if (!validateEmail(formData.email)) {
      e.preventDefault();
      setErrors({ email: "Invalid email address" });
      return;
    }
    setErrors({});
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="min-h-screen bg-cream px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-lg">
        <div className="mb-8 text-center">
          <h1 className="section-title">Contact us</h1>
          <p className="section-subtitle">We would love to hear from you</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-card">
          <form
            action="https://formsubmit.co/edward.an03@email.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field mt-1 w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field mt-1 w-full"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="input-field mt-1 w-full resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
