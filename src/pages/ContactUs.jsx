import React from "react";
import SendQuery from "../components/SendQuery";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-8 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
    >
      <div className="max-w-[120rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-cyan-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
              <path d="M12 18h.01"></path>
            </svg>
            <span className="font-paragraph text-sm font-medium">
              Get In Touch
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-xl font-paragraph opacity-90 max-w-3xl mx-auto">
            Ready to be part of ZoShow's digital advertising network? Get in
            touch with us to learn more about our planned digital screen network
            in Bangalore and Amaravathi.
          </p>
        </div>

        {/* Cards + Form */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12">
          {/* Left Cards */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Founder Card */}
            {/*Note: Temporarly commented */}
            {/* <div className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-[1.02] transition-transform w-full">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Founders
                </h3>
                <p className="font-paragraph opacity-90">Anil (Founder)</p>
                <p className="font-paragraph opacity-90">Sudha (Co-founder)</p>
              </div>
            </div> */}

            {/* Email Card */}
            <div className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-[1.02] transition-transform w-full">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Email
                </h3>
                <a
                  href="mailto:ask@zoshow.in"
                  className="font-paragraph text-cyan-300 hover:text-cyan-200 transition-colors duration-300"
                >
                  ask@zoshow.in
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-[1.02] transition-transform w-full">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                  <path d="M12 18h.01"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+917287843240"
                  className="font-paragraph text-cyan-300 hover:text-cyan-200 transition-colors duration-300"
                >
                  +91 7619408800
                </a>
              </div>
            </div>

            {/* Headquarters Card */}
            <div className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-[1.02] transition-transform w-full">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Headquarters
                </h3>
                <p className="font-paragraph opacity-90">Bangalore, India</p>
              </div>
            </div>
          </div>

          {/* Right: Send Query Form */}
          <div className="flex-1 lg:max-w-lg w-full">
            <SendQuery />
          </div>
        </div>
      </div>
    </section>
  );
}
