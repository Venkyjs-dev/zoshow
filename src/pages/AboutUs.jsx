import React from "react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-8 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white"
    >
      <div className="max-w-[120rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Header Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-cyan-400"
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
              <span className="font-paragraph text-sm font-medium">
                About ZoShow
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-5xl font-heading font-bold mb-8">
              Leading Digital Advertising Innovation
            </h2>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-cyan-400">
                  Our Mission
                </h3>
                <p className="font-paragraph text-lg opacity-90">
                  To transform digital out-of-home advertising by building a
                  premium network of digital screens in strategic locations,
                  providing businesses with effective advertising solutions and
                  comprehensive performance analytics.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-cyan-400">
                  Our Vision
                </h3>
                <p className="font-paragraph text-lg opacity-90">
                  To establish ZoShow as a leading digital advertising platform
                  in India, starting with Bangalore and Amaravathi, and
                  expanding to connect brands with their target audiences
                  through strategic premium location partnerships.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="text-center">
            <div className="border text-foreground bg-white/10 backdrop-blur-sm border-white/20 p-8 rounded-2xl hover:scale-[1.02] transition-transform">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
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
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Founded by Anil &amp; Sudha
              </h3>
              <p className="font-paragraph opacity-90">
                ZoShow was founded by Anil (Founder) and Sudha (Co-founder),
                entrepreneurs with a vision to transform digital advertising in
                India. Committed to building innovative solutions that connect
                brands with consumers through strategic technology deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
