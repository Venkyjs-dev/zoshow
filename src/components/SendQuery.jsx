import React from "react";

export default function SendQuery() {
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

      <form className="space-y-6 text-left">
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
            required
            className="flex h-10 w-full rounded-md border px-4 py-1 text-base shadow-sm transition-colors hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-paragraph font-medium mb-2 block text-white">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+91 98765 43210"
            required
            className="flex h-10 w-full rounded-md border px-4 py-1 text-base shadow-sm transition-colors hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
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
            required
            className="flex w-full min-h-[60px] rounded-md border px-3 py-2 text-base shadow-sm hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-white/10 border-white/20 text-white placeholder:text-white/60 resize-none"></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 w-full h-10 text-white font-heading font-semibold px-8 py-4 rounded-lg shadow-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            Send Query
          </button>
        </div>
      </form>
    </div>
  );
}
