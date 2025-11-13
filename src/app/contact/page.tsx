"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    service: "Full Production",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: "success" | "error" | "";
  }>({ message: "", type: "" });

  /* ------------------ INPUT HANDLER ------------------ */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* ------------------ SUBMIT HANDLER ------------------ */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus({ message: "", type: "" });

    const formPayload = {
      ...formData,
      access_key: "b3907a50-801a-4a86-9c87-cc8f55aa7f4c",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          message: "Thank you! Your message has been sent successfully.",
          type: "success",
        });

        setFormData({
          name: "",
          email: "",
          brand: "",
          service: "Full Production",
          message: "",
        });
      } else {
        setFormStatus({
          message: "Oops! Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch (err) {
      setFormStatus({
        message: "Network error. Please try again.",
        type: "error",
      });
    }

    setLoading(false);
  };

  /* ------------------ UI ------------------ */
  return (
    <motion.div
      className="bg-white text-gray-700 pt-10 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center my-16">
          <h1 className="text-5xl md:text-6xl font-heading text-gray-900 mb-4">
            Start a Project
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us your idea — we’ll bring it to life. Fill out the form below
            or schedule a call to get started.
          </p>
          <p className="text-sm text-gray-500 mt-2 italic">
            p.s. Currently taking on new projects.
          </p>
        </header>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red"
                />
              </div>

              {/* Brand */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Brand/Business
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full bg-white border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red"
                />
              </div>

              {/* Service */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  What do you need?
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red"
                >
                  <option>Full Production</option>
                  <option>Social Media</option>
                  <option>Editing Only</option>
                  <option>Camera Work</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-brand-red text-white font-bold py-3 px-6 rounded-md transition-all duration-300 ${
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-brand-red-hover"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Status */}
              {formStatus.message && (
                <p
                  className={`mt-4 text-center text-sm ${
                    formStatus.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {formStatus.message}
                </p>
              )}
            </form>
          </div>

          {/* Booking & Info */}
          <div className="flex flex-col justify-center text-center">
            <h3 className="text-3xl font-heading mb-4 text-gray-900">
              Prefer a direct chat?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a free 15-minute discovery call with our creative
              director to discuss your project in detail.
            </p>

            <a
              href="https://calendly.com/withsambhab/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block bg-gray-900 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition-all duration-300"
            >
              Book a Free Discovery Call
            </a>

            <div className="my-6">
              <p className="text-gray-600">Or email us directly at:</p>
              <a
                href="mailto:withsambhab@gmail.com"
                className="font-semibold text-brand-red hover:text-brand-red-hover"
              >
                withsambhab@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://wa.me/918777085160"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-red transition-colors"
              >
                WhatsApp
              </a>
              <span className="text-gray-600">Kolkata, IN</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
