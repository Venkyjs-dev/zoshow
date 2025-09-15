import React from "react";

const workflowSteps = [
  {
    id: 1,
    title: "Campaign Setup",
    description:
      "Upload your creative assets and define campaign parameters through our intuitive dashboard. Set targeting criteria and budget allocation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Location Selection",
    description:
      "Choose from our network of digital screens in Bangalore and Amaravathi. Select premium locations based on your target audience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Content Scheduling",
    description:
      "Schedule your campaigns with flexible timing options. The platform will manage content deployment and ensure optimal display scheduling.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Performance Tracking",
    description:
      "Monitor campaign performance through comprehensive dashboards with detailed metrics, reports, and insights for campaign optimization.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ),
  },
];

export default function PlatformWorkflow() {
  return (
    <section className="py-24 px-4 sm:px-8 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-[120rem] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full border border-blue-500/20 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="font-paragraph text-sm font-semibold text-blue-600">
              Platform Workflow
            </span>
          </div>

          <h2 className="text-5xl font-heading font-bold text-midnight-navy mb-6">
            How It Works
          </h2>
          <p className="text-xl font-paragraph text-midnight-navy/80 max-w-3xl mx-auto">
            Simple four-step process planned for campaign deployment and
            management. From setup to performance tracking, our platform ensures
            efficient campaign execution.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step) => (
            <div
              key={step.id}
              className="text-center group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {step.icon}
                </div>
                {/* Number circle */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-midnight-navy text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-midnight-navy mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="font-paragraph text-midnight-navy/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
