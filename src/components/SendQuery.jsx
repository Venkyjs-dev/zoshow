import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function SendQuery() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Simple validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{10,15}$/;

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email";

    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Please enter a valid phone number";

    if (!formData.requirements)
      newErrors.requirements = "Please describe your requirements";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setSuccessMessage("");
      setErrors({});

      try {
        const SERVICE_ID = "my-zoshow-1780"; // replace with your EmailJS Service ID
        const TEMPLATE_ID = "template_m2u09ta"; // replace with your EmailJS Template ID
        const PUBLIC_KEY = "aRtTI61mHyNSDigFF"; // replace with your EmailJS Public Key

        const response = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            user_requirements: formData.requirements,
          },
          PUBLIC_KEY
        );

        console.log("Email sent successfully:", response);
        setSuccessMessage("Your query has been submitted successfully!");
        setFormData({ name: "", email: "", phone: "", requirements: "" });
      } catch (err) {
        console.error("Failed to send email:", err);
        setErrors({ submit: "Failed to send query. Please try again." });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="text-center bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/20 p-10 rounded-3xl">
      {/* Icon */}
      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mx-auto mb-8 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </div>

      <h3 className="text-3xl font-heading font-bold mb-6">
        Send Us Your Query
      </h3>
      <p className="font-paragraph text-lg opacity-90 mb-8">
        Have questions about our digital advertising platform? Fill out the form
        below and we'll get back to you soon.
      </p>

      <form className="space-y-6 text-left" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="text-sm font-paragraph font-medium mb-2 block text-white"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`flex h-10 w-full rounded-md border px-4 py-1 text-base shadow-sm transition-colors hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-white/10 border-white/20 text-white placeholder:text-white/60 ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-sm font-paragraph font-medium mb-2 block text-white"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`flex h-10 w-full rounded-md border px-4 py-1 text-base shadow-sm transition-colors hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-white/10 border-white/20 text-white placeholder:text-white/60 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-paragraph font-medium mb-2 block text-white"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+91 0000000000"
            value={formData.phone}
            onChange={handleChange}
            className={`flex h-10 w-full rounded-md border px-4 py-1 text-base shadow-sm transition-colors hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-white/10 border-white/20 text-white placeholder:text-white/60 ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Requirements */}
        <div>
          <label
            htmlFor="requirements"
            className="text-sm font-paragraph font-medium mb-2 block text-white"
          >
            Your Requirements *
          </label>
          <textarea
            id="requirements"
            name="requirements"
            placeholder="Please describe your advertising needs, target audience, budget, or any specific questions about our platform..."
            rows="4"
            value={formData.requirements}
            onChange={handleChange}
            className={`flex w-full min-h-[60px] rounded-md border px-3 py-2 text-base shadow-sm hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-white/10 border-white/20 text-white placeholder:text-white/60 resize-none ${
              errors.requirements ? "border-red-500" : ""
            }`}
          ></textarea>
          {errors.requirements && (
            <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 w-full h-10 text-white font-heading font-semibold px-8 py-4 rounded-lg shadow-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Query"}
          </button>

          {successMessage && (
            <p className="text-green-400 mt-2 text-center">{successMessage}</p>
          )}
          {errors.submit && (
            <p className="text-red-500 mt-2 text-center">{errors.submit}</p>
          )}
        </div>
      </form>
    </div>
  );
}
