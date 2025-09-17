import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

export default function SendQuery() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  const validate = (data) => {
    const newErrors = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(data.email))
      newErrors.email = "Please enter a valid email";
    if (!data.phone) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(data.phone))
      newErrors.phone = "Please enter a valid 10-digit phone number";
    if (!data.requirements)
      newErrors.requirements = "Please describe your requirements";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      const formatted =
        digits.length > 5 ? digits.slice(0, 5) + " " + digits.slice(5) : digits;
      setFormData({ ...formData, phone: formatted });
      setErrors((prev) => ({
        ...prev,
        phone: validate({ ...formData, phone: digits }).phone,
      }));
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors((prev) => ({
        ...prev,
        [name]: validate({ ...formData, [name]: value })[name],
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const purePhone = formData.phone.replace(/\D/g, "");
    const validationErrors = validate({ ...formData, phone: purePhone });
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      requirements: true,
    });

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setSuccessMessage("");
      setErrors({});
      try {
        // EmailJS integration goes here
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

        setSuccessMessage("Your query has been submitted successfully!");
        setFormData({ name: "", email: "", phone: "", requirements: "" });

        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          shapes: ["circle", "star", "heart"],
          colors: [
            "#ffb3c6",
            "#ffd6a5",
            "#caffbf",
            "#9bf6ff",
            "#bdb2ff",
            "#ff8fab",
          ],
        });
      } catch (err) {
        console.error("Failed to send email:", err);
        setErrors({ submit: "Failed to send query. Please try again." });
      } finally {
        setLoading(false);
      }
    }
  };

  // Button is disabled until all fields are valid
  const isFormValid =
    Object.keys(
      validate({ ...formData, phone: formData.phone.replace(/\D/g, "") })
    ).length === 0;

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
          strokeWidth={2}>
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
            className="text-sm font-paragraph font-medium mb-2 block text-white">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`flex h-10 w-full rounded-md border px-4 py-1 text-base shadow-sm transition-colors hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-white/10 border-white/20 text-white placeholder:text-white/60 ${
              touched.name && errors.name ? "border-red-500" : ""
            }`}
          />
          {touched.name && errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-sm font-paragraph font-medium mb-2 block text-white">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`flex h-10 w-full rounded-md border px-4 py-1 text-base shadow-sm transition-colors hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-white/10 border-white/20 text-white placeholder:text-white/60 ${
              touched.email && errors.email ? "border-red-500" : ""
            }`}
          />
          {touched.email && errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-paragraph font-medium mb-2 block text-white">
            Phone Number *
          </label>
          <div className="flex items-center h-10 w-full rounded-md border bg-white/10 border-white/20 text-white focus-within:ring-2 focus-within:ring-cyan-400 focus-within:border-cyan-400">
            <span className="px-3 text-white/80 select-none">+91</span>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="00000 00000"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`flex-1 bg-transparent outline-none px-1 text-base placeholder:text-white/60 ${
                touched.phone && errors.phone ? "border-red-500" : ""
              }`}
            />
          </div>
          {touched.phone && errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Requirements */}
        <div>
          <label
            htmlFor="requirements"
            className="text-sm font-paragraph font-medium mb-2 block text-white">
            Your Requirements *
          </label>
          <textarea
            id="requirements"
            name="requirements"
            placeholder="Please describe your advertising needs, target audience, budget, or any specific questions about our platform..."
            rows="4"
            value={formData.requirements}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`flex w-full min-h-[60px] rounded-md border px-3 py-2 text-base shadow-sm hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-white/10 border-white/20 text-white placeholder:text-white/60 resize-none ${
              touched.requirements && errors.requirements
                ? "border-red-500"
                : ""
            }`}
          />
          {touched.requirements && errors.requirements && (
            <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>
          )}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className="inline-flex items-center justify-center gap-2 w-full h-10 text-white font-heading font-semibold px-8 py-4 rounded-lg shadow-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
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
